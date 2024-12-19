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
    contractPdf
    contractRequests {
      nextToken
      __typename
    }
    createdAt
    endDate
    extensionOption {
      extension
      extensionPeriod
      extensionPeriodType
      extensionPrice
      extensionPriceCurrency
      __typename
    }
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      city
      country
      createdAt
      description
      displayName
      floor
      hasBalcony
      hasElevator
      hasParking
      hasSaferoom
      id
      landlordId
      numberOfRooms
      size
      street
      type
      updatedAt
      zip
      __typename
    }
    propertyId
    rentCurrency
    startDate
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContractMutationVariables,
  APITypes.CreateContractMutation
>;
export const createContractRequests = /* GraphQL */ `mutation CreateContractRequests(
  $condition: ModelContractRequestsConditionInput
  $input: CreateContractRequestsInput!
) {
  createContractRequests(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    id
    responseText
    status
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContractRequestsMutationVariables,
  APITypes.CreateContractRequestsMutation
>;
export const createIncident = /* GraphQL */ `mutation CreateIncident(
  $condition: ModelIncidentConditionInput
  $input: CreateIncidentInput!
) {
  createIncident(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    title
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
    city
    contracts {
      nextToken
      __typename
    }
    country
    createdAt
    description
    displayName
    floor
    hasBalcony
    hasElevator
    hasParking
    hasSaferoom
    id
    landlordId
    numberOfRooms
    propertyLandlord {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    size
    street
    type
    updatedAt
    zip
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
    birthday
    city
    contractRequests {
      nextToken
      __typename
    }
    country
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
    street
    tenantContracts {
      nextToken
      __typename
    }
    updatedAt
    zip
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
    contractPdf
    contractRequests {
      nextToken
      __typename
    }
    createdAt
    endDate
    extensionOption {
      extension
      extensionPeriod
      extensionPeriodType
      extensionPrice
      extensionPriceCurrency
      __typename
    }
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      city
      country
      createdAt
      description
      displayName
      floor
      hasBalcony
      hasElevator
      hasParking
      hasSaferoom
      id
      landlordId
      numberOfRooms
      size
      street
      type
      updatedAt
      zip
      __typename
    }
    propertyId
    rentCurrency
    startDate
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContractMutationVariables,
  APITypes.DeleteContractMutation
>;
export const deleteContractRequests = /* GraphQL */ `mutation DeleteContractRequests(
  $condition: ModelContractRequestsConditionInput
  $input: DeleteContractRequestsInput!
) {
  deleteContractRequests(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    id
    responseText
    status
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContractRequestsMutationVariables,
  APITypes.DeleteContractRequestsMutation
>;
export const deleteIncident = /* GraphQL */ `mutation DeleteIncident(
  $condition: ModelIncidentConditionInput
  $input: DeleteIncidentInput!
) {
  deleteIncident(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    title
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
    city
    contracts {
      nextToken
      __typename
    }
    country
    createdAt
    description
    displayName
    floor
    hasBalcony
    hasElevator
    hasParking
    hasSaferoom
    id
    landlordId
    numberOfRooms
    propertyLandlord {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    size
    street
    type
    updatedAt
    zip
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
    birthday
    city
    contractRequests {
      nextToken
      __typename
    }
    country
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
    street
    tenantContracts {
      nextToken
      __typename
    }
    updatedAt
    zip
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
    contractPdf
    contractRequests {
      nextToken
      __typename
    }
    createdAt
    endDate
    extensionOption {
      extension
      extensionPeriod
      extensionPeriodType
      extensionPrice
      extensionPriceCurrency
      __typename
    }
    id
    incidents {
      nextToken
      __typename
    }
    monthlyRent
    property {
      city
      country
      createdAt
      description
      displayName
      floor
      hasBalcony
      hasElevator
      hasParking
      hasSaferoom
      id
      landlordId
      numberOfRooms
      size
      street
      type
      updatedAt
      zip
      __typename
    }
    propertyId
    rentCurrency
    startDate
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContractMutationVariables,
  APITypes.UpdateContractMutation
>;
export const updateContractRequests = /* GraphQL */ `mutation UpdateContractRequests(
  $condition: ModelContractRequestsConditionInput
  $input: UpdateContractRequestsInput!
) {
  updateContractRequests(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    id
    responseText
    status
    tenant {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    tenantId
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContractRequestsMutationVariables,
  APITypes.UpdateContractRequestsMutation
>;
export const updateIncident = /* GraphQL */ `mutation UpdateIncident(
  $condition: ModelIncidentConditionInput
  $input: UpdateIncidentInput!
) {
  updateIncident(condition: $condition, input: $input) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    contractId
    createdAt
    date
    description
    id
    status
    title
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
    city
    contracts {
      nextToken
      __typename
    }
    country
    createdAt
    description
    displayName
    floor
    hasBalcony
    hasElevator
    hasParking
    hasSaferoom
    id
    landlordId
    numberOfRooms
    propertyLandlord {
      birthday
      city
      country
      createdAt
      displayName
      email
      gender
      givenName
      lastName
      phoneNumber
      street
      updatedAt
      zip
      __typename
    }
    size
    street
    type
    updatedAt
    zip
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
    birthday
    city
    contractRequests {
      nextToken
      __typename
    }
    country
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
    street
    tenantContracts {
      nextToken
      __typename
    }
    updatedAt
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
