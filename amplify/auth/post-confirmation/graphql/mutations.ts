/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContract = /* GraphQL */ `mutation CreateContract(
  $condition: ModelContractConditionInput
  $input: CreateContractInput!
) {
  createContract(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateContractMutationVariables,
  APITypes.CreateContractMutation
>;
export const createIncident = /* GraphQL */ `mutation CreateIncident(
  $condition: ModelIncidentConditionInput
  $input: CreateIncidentInput!
) {
  createIncident(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateIncidentMutationVariables,
  APITypes.CreateIncidentMutation
>;
export const createProperty = /* GraphQL */ `mutation CreateProperty(
  $condition: ModelPropertyConditionInput
  $input: CreatePropertyInput!
) {
  createProperty(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePropertyMutationVariables,
  APITypes.CreatePropertyMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteContract = /* GraphQL */ `mutation DeleteContract(
  $condition: ModelContractConditionInput
  $input: DeleteContractInput!
) {
  deleteContract(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteContractMutationVariables,
  APITypes.DeleteContractMutation
>;
export const deleteIncident = /* GraphQL */ `mutation DeleteIncident(
  $condition: ModelIncidentConditionInput
  $input: DeleteIncidentInput!
) {
  deleteIncident(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteIncidentMutationVariables,
  APITypes.DeleteIncidentMutation
>;
export const deleteProperty = /* GraphQL */ `mutation DeleteProperty(
  $condition: ModelPropertyConditionInput
  $input: DeletePropertyInput!
) {
  deleteProperty(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePropertyMutationVariables,
  APITypes.DeletePropertyMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateContract = /* GraphQL */ `mutation UpdateContract(
  $condition: ModelContractConditionInput
  $input: UpdateContractInput!
) {
  updateContract(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateContractMutationVariables,
  APITypes.UpdateContractMutation
>;
export const updateIncident = /* GraphQL */ `mutation UpdateIncident(
  $condition: ModelIncidentConditionInput
  $input: UpdateIncidentInput!
) {
  updateIncident(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateIncidentMutationVariables,
  APITypes.UpdateIncidentMutation
>;
export const updateProperty = /* GraphQL */ `mutation UpdateProperty(
  $condition: ModelPropertyConditionInput
  $input: UpdatePropertyInput!
) {
  updateProperty(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePropertyMutationVariables,
  APITypes.UpdatePropertyMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
