# Keystone6 OAuth Starter Kit: OAuth

Welcome, welcome! 👋🏼

## **This Starter kit:**
- adds [`keystone-6-oauth`](npmjs.com/package/keystone-6-oauth) package to Keystone6
    - enables you to add Social Logins to your application
    - you can choose from a list of supported providers.
- is designed to be a starting point for your application
    - built on top of the [`keystone-with-structure` **Starter Kit**](https://github.com/ijsto/keystone-with-structure), which helps organizing a large-scale application.

## **Lists**
 
 - A User list with a name and email fields - this will be your base authentication entity
    - You can add more fields to this list if you want to or even create a different entity for authentication (Tutorial coming soon...)
 - A sign-in and error pages for your Admin UI (TODO: to add)
 - A NextAuth based OAuth flow for your Application and Admin UI
    - Choose from a list of providers
    - Use Auth0 to enable email and password based sign-in

> Currently this starter kit is designed to work with Next.js, but it may be possible to add support for other frameworks in near future.

Run

```
yarn dev
```

To view the config for your new app, look at [./keystone.ts](./keystone.ts)