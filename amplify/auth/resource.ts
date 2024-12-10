import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resource';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false
    },
    familyName: {
      mutable: true,
      required: false,
    },
    givenName: {
      mutable: true,
      required: false,
    },
    birthdate: {
      mutable: true,
      required: false,
    },
    gender: {
      mutable: true,
      required: false,
    },
    phoneNumber: {
      mutable: true,
      required: false,
    },
   address: {
      mutable: true,
      required: false,
    },
  },
  triggers: {
    postConfirmation
  }
});