/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContract = /* GraphQL */ `subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
  onCreateContract(filter: $filter) {
    contractDescription
    createdAt
    endDate
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      createdAt
      id
      landlordId
      propertyAddress
      propertyDescription
      propertySize
      propertyType
      updatedAt
      __typename
    }
    propertyId
    startDate
    tenant {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContractSubscriptionVariables,
  APITypes.OnCreateContractSubscription
>;
export const onCreateIncident = /* GraphQL */ `subscription OnCreateIncident($filter: ModelSubscriptionIncidentFilterInput) {
  onCreateIncident(filter: $filter) {
    contract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncidentSubscriptionVariables,
  APITypes.OnCreateIncidentSubscription
>;
export const onCreateProperty = /* GraphQL */ `subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onCreateProperty(filter: $filter) {
    activeContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    createdAt
    id
    landlordId
    propertyAddress
    propertyDescription
    propertyLandlord {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    propertySize
    propertyType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePropertySubscriptionVariables,
  APITypes.OnCreatePropertySubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
    address
    birthday
    createdAt
    displayName
    email
    gender
    givenName
    lastName
    phoneNumber
    properties {
      nextToken
      __typename
    }
    tenantContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteContract = /* GraphQL */ `subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
  onDeleteContract(filter: $filter) {
    contractDescription
    createdAt
    endDate
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      createdAt
      id
      landlordId
      propertyAddress
      propertyDescription
      propertySize
      propertyType
      updatedAt
      __typename
    }
    propertyId
    startDate
    tenant {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContractSubscriptionVariables,
  APITypes.OnDeleteContractSubscription
>;
export const onDeleteIncident = /* GraphQL */ `subscription OnDeleteIncident($filter: ModelSubscriptionIncidentFilterInput) {
  onDeleteIncident(filter: $filter) {
    contract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncidentSubscriptionVariables,
  APITypes.OnDeleteIncidentSubscription
>;
export const onDeleteProperty = /* GraphQL */ `subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onDeleteProperty(filter: $filter) {
    activeContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    createdAt
    id
    landlordId
    propertyAddress
    propertyDescription
    propertyLandlord {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    propertySize
    propertyType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePropertySubscriptionVariables,
  APITypes.OnDeletePropertySubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
    address
    birthday
    createdAt
    displayName
    email
    gender
    givenName
    lastName
    phoneNumber
    properties {
      nextToken
      __typename
    }
    tenantContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateContract = /* GraphQL */ `subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
  onUpdateContract(filter: $filter) {
    contractDescription
    createdAt
    endDate
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      createdAt
      id
      landlordId
      propertyAddress
      propertyDescription
      propertySize
      propertyType
      updatedAt
      __typename
    }
    propertyId
    startDate
    tenant {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContractSubscriptionVariables,
  APITypes.OnUpdateContractSubscription
>;
export const onUpdateIncident = /* GraphQL */ `subscription OnUpdateIncident($filter: ModelSubscriptionIncidentFilterInput) {
  onUpdateIncident(filter: $filter) {
    contract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncidentSubscriptionVariables,
  APITypes.OnUpdateIncidentSubscription
>;
export const onUpdateProperty = /* GraphQL */ `subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onUpdateProperty(filter: $filter) {
    activeContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    createdAt
    id
    landlordId
    propertyAddress
    propertyDescription
    propertyLandlord {
      address
      birthday
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      tenantId
      updatedAt
      __typename
    }
    propertySize
    propertyType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePropertySubscriptionVariables,
  APITypes.OnUpdatePropertySubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
    address
    birthday
    createdAt
    displayName
    email
    gender
    givenName
    lastName
    phoneNumber
    properties {
      nextToken
      __typename
    }
    tenantContract {
      contractDescription
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      startDate
      updatedAt
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
