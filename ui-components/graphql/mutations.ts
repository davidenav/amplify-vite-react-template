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
`;
export const createContractRequests = /* GraphQL */ `
  mutation CreateContractRequests(
    $condition: ModelContractRequestsConditionInput
    $input: CreateContractRequestsInput!
  ) {
    createContractRequests(condition: $condition, input: $input) {
      contract {
        contractDescription
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
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
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
`;
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $condition: ModelContractConditionInput
    $input: DeleteContractInput!
  ) {
    deleteContract(condition: $condition, input: $input) {
      contractDescription
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
`;
export const deleteContractRequests = /* GraphQL */ `
  mutation DeleteContractRequests(
    $condition: ModelContractRequestsConditionInput
    $input: DeleteContractRequestsInput!
  ) {
    deleteContractRequests(condition: $condition, input: $input) {
      contract {
        contractDescription
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
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
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
`;
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $condition: ModelContractConditionInput
    $input: UpdateContractInput!
  ) {
    updateContract(condition: $condition, input: $input) {
      contractDescription
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
`;
export const updateContractRequests = /* GraphQL */ `
  mutation UpdateContractRequests(
    $condition: ModelContractRequestsConditionInput
    $input: UpdateContractRequestsInput!
  ) {
    updateContractRequests(condition: $condition, input: $input) {
      contract {
        contractDescription
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
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
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
`;
