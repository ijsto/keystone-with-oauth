import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  timestamp,
} from '@keystone-6/core/fields';

export const User = list({
  // WARNING
  //   by default anyone can create, query, update and delete anything
  //   you can learn more about access control by reading documentation or
  //   check out this course https://ijs.to/c/keystone6-access-control
  access: allowAll,

  // here we define our User list - the entity that will be used to log in and authenticate
  fields: {
    subjectId: text({ isIndexed: 'unique' }),
    name: text(),
    
    email: text({
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - in most cases it's a good idea
      isIndexed: 'unique',
    }),

    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
});
