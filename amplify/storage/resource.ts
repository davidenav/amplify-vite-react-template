import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'coralease',
  access: (allow) => ({
    'contracts/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ]
  })
});