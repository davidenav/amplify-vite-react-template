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
` as GeneratedQuery<
  APITypes.GetContractQueryVariables,
  APITypes.GetContractQuery
>;
export const getIncident = /* GraphQL */ `query GetIncident($id: ID!) {
  getIncident(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIncidentQueryVariables,
  APITypes.GetIncidentQuery
>;
export const getProperty = /* GraphQL */ `query GetProperty($id: ID!) {
  getProperty(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPropertyQueryVariables,
  APITypes.GetPropertyQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($email: String!) {
  getUserProfile(email: $email) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listContracts = /* GraphQL */ `query ListContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
) {
  listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $email: String
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
