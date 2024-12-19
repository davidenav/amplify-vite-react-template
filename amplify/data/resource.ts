import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a.schema({
  Address: a.customType(
    {
      street: a.string(),
      city: a.string(),
      zip: a.string(),
      country: a.string(),
    }
  ),
  UserProfile: a
    .model({
      displayName: a.string(),
      givenName: a.string(),
      lastName: a.string(),
      birthday: a.date(),
      email: a.email().required(),
      phoneNumber: a.phone(),
      street: a.string(),
      city: a.string(),
      zip: a.string(),
      country: a.string(),
      gender: a.enum(['Male', 'Female', 'Other']),
      properties: a.hasMany('Property', 'landlordId'),
      tenantContracts: a.hasMany('Contract', 'tenantId'),
      contractRequests: a.hasMany('ContractRequests', 'tenantId'),
    })
    .identifier(['email']),
  Property: a
    .model({
      landlordId: a.email().required(),
      propertyLandlord: a.belongsTo('UserProfile', 'landlordId'),
      displayName: a.string(),
      street: a.string(),
      city: a.string(),
      zip: a.string(),
      country: a.string(),
      type: a.enum(['House', 'Apartment', 'Penthouse']),
      size: a.integer(),
      numberOfRooms: a.integer(),
      floor: a.integer(),
      hasElevator: a.boolean(),
      hasBalcony: a.boolean(),
      hasParking: a.boolean(),
      hasSaferoom: a.boolean(),
      description: a.string(),
      contracts: a.hasMany('Contract', 'propertyId'),
    }),
  Contract: a
    .model({
      propertyId: a.id().required(),
      property: a.belongsTo('Property', 'propertyId'),
      tenantId: a.email(),
      tenant: a.belongsTo('UserProfile', 'tenantId'),
      startDate: a.date(),
      endDate: a.date(),
      monthlyRent: a.integer(),
      rentCurrency: a.enum(['USD', 'EUR', 'ILS']),
      contractDescription: a.string(),
      contractPdf: a.string(),
      extensionOption: a.customType({
        extension: a.boolean(),
        extensionPeriod: a.integer(),
        extensionPeriodType: a.enum(['Days', 'Months', 'Years']),
        extensionPrice: a.integer(),
        extensionPriceCurrency: a.enum(['USD', 'EUR', 'ILS']),
      }),
      incidents: a.hasMany('Incident', 'contractId'),
      contractRequests: a.hasMany('ContractRequests', 'contractId'),
    }),
  ContractRequests: a
    .model({
      type: a.enum(['New', 'Extension', 'Termination']),
      contractId: a.id().required(),
      contract: a.belongsTo('Contract', 'contractId'),
      status: a.enum(['Pending', 'Approved', 'Rejected']),
      responseText: a.string(),
      tenantId: a.email().required(),
      tenant: a.belongsTo('UserProfile', 'tenantId'),
    }),
  Incident: a
    .model({
      contractId: a.id().required(),
      contract: a.belongsTo('Contract', 'contractId'),
      title: a.string(),
      description: a.string(),
      status: a.enum(['Open', 'Closed']),
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