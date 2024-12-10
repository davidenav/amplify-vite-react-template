/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContract = /* GraphQL */ `
  mutation CreateContract(
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
`;
export const createIncident = /* GraphQL */ `
  mutation CreateIncident(
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
`;
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
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
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
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
`;
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
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
`;
export const deleteIncident = /* GraphQL */ `
  mutation DeleteIncident(
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
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
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
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
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
`;
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
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
`;
export const updateIncident = /* GraphQL */ `
  mutation UpdateIncident(
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
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
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
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
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
`;
