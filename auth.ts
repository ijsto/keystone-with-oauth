// If you want to learn more about how Keystone6 OAuth authentication works, please
// visit our documentation at https://keystone-oauth.vercel.app
import 'dotenv/config';

import { createAuth } from 'keystone-6-oauth';
import GoogleProvider from 'keystone-6-oauth/providers/google';

import { statelessSessions } from '@keystone-6/core/session';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = "~~ randomBytes(32).toString('hex') ~~ ";
  }
}

const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
});

const { withAuth } = createAuth({
  autoCreate: true,
  identityField: 'subjectId',
  keystonePath: '/admin',
  listKey: 'User',
  onSignIn: async (props: any) => {
    const email = props.user.email as string;
    console.log(`🚀 ~ onSignIn: ~ email`, email)
   
    return true;
  },
  onSignUp: async (props: any) => {
    const email = props.user.email as string;
   
    return { email };
  },
  pages: {
    error: '/auth/error',
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  sessionData: `id email`,
  sessionSecret,
});

export { session, withAuth };