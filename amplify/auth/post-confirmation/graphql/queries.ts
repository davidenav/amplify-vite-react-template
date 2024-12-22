/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContract = /* GraphQL */ `query GetContract($id: ID!) {
  getContract(id: $id) {
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
    paymentDayOfMonth
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
` as GeneratedQuery<
  APITypes.GetContractQueryVariables,
  APITypes.GetContractQuery
>;
export const getContractRequests = /* GraphQL */ `query GetContractRequests($id: ID!) {
  getContractRequests(id: $id) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      paymentDayOfMonth
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
` as GeneratedQuery<
  APITypes.GetContractRequestsQueryVariables,
  APITypes.GetContractRequestsQuery
>;
export const getIncident = /* GraphQL */ `query GetIncident($id: ID!) {
  getIncident(id: $id) {
    contract {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      paymentDayOfMonth
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
` as GeneratedQuery<
  APITypes.GetIncidentQueryVariables,
  APITypes.GetIncidentQuery
>;
export const getProperty = /* GraphQL */ `query GetProperty($id: ID!) {
  getProperty(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPropertyQueryVariables,
  APITypes.GetPropertyQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($email: AWSEmail!) {
  getUserProfile(email: $email) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listContractRequests = /* GraphQL */ `query ListContractRequests(
  $filter: ModelContractRequestsFilterInput
  $limit: Int
  $nextToken: String
) {
  listContractRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contractId
      createdAt
      id
      responseText
      status
      tenantId
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractRequestsQueryVariables,
  APITypes.ListContractRequestsQuery
>;
export const listContracts = /* GraphQL */ `query ListContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
) {
  listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contractDescription
      contractPdf
      createdAt
      endDate
      id
      monthlyRent
      paymentDayOfMonth
      propertyId
      rentCurrency
      startDate
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractsQueryVariables,
  APITypes.ListContractsQuery
>;
export const listIncidents = /* GraphQL */ `query ListIncidents(
  $filter: ModelIncidentFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIncidentsQueryVariables,
  APITypes.ListIncidentsQuery
>;
export const listProperties = /* GraphQL */ `query ListProperties(
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $email: AWSEmail
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserProfiles(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
