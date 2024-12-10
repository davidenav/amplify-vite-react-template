import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";
import { createUserProfile } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",  
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
    console.log("User Attributes:");
    for (const [key, value] of Object.entries(event.request.userAttributes)) {
        console.log(`${key}: ${value}`);
    }
    await client.graphql({
        query: createUserProfile,
        variables: {
        input: {
            email: event.request.userAttributes.email,
            givenName: event.request.userAttributes.given_name,
            lastName: event.request.userAttributes.family_name,
            phoneNumber: event.request.userAttributes.phone_number,
            displayName: event.request.userAttributes.preferred_username,
            birthday: event.request.userAttributes.birthdate,
        },
        },
    });

    return event;
};