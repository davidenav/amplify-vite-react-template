import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a.schema({
  UserProfile: a
    .model({
      displayName: a.string(),
      givenName: a.string(),
      lastName: a.string(),
      birthday: a.string(),
      email: a.string().required(),
      phoneNumber: a.string(),
      address: a.string(),
      gender: a.string(),
      properties: a.hasMany('Property', 'landlordId'),
      tenantId: a.string(),
      tenantContract: a.belongsTo('Contract', 'tenantId'),
    })
    .identifier(['email']),
  Property: a
    .model({
      landlordId: a.string().required(),
      propertyLandlord: a.belongsTo('UserProfile', 'landlordId'),
      propertyAddress: a.string(),
      propertyType: a.string(),
      propertySize: a.string(),
      propertyDescription: a.string(),
      activeContract: a.hasOne('Contract', 'propertyId'),
    }),
  Contract: a
    .model({
      propertyId: a.string().required(),
      property: a.belongsTo('Property', 'propertyId'),
      tenant: a.hasOne('UserProfile', 'tenantId'),
      startDate: a.date(),
      endDate: a.date(),
      monthlyRent: a.integer(),
      contractDescription: a.string(),
      incidents: a.hasMany('Incident', 'contractId'),
    }),
  Incident: a
    .model({
      contractId: a.string().required(),
      contract: a.belongsTo('Contract', 'contractId'),
      description: a.string(),
      status: a.string(),
      date: a.datetime(),
    }),
})
.authorization((allow) => [allow.authenticated(), allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});