/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Contract = {
  __typename: "Contract",
  contractDescription?: string | null,
  createdAt: string,
  endDate?: string | null,
  id: string,
  incidents?: ModelIncidentConnection | null,
  monthlyRent?: number | null,
  property?: Property | null,
  propertyId: string,
  startDate?: string | null,
  tenant?: UserProfile | null,
  updatedAt: string,
};

export type ModelIncidentConnection = {
  __typename: "ModelIncidentConnection",
  items:  Array<Incident | null >,
  nextToken?: string | null,
};

export type Incident = {
  __typename: "Incident",
  contract?: Contract | null,
  contractId: string,
  createdAt: string,
  date?: string | null,
  description?: string | null,
  id: string,
  status?: string | null,
  updatedAt: string,
};

export type Property = {
  __typename: "Property",
  activeContract?: Contract | null,
  createdAt: string,
  id: string,
  landlordId: string,
  propertyAddress?: string | null,
  propertyDescription?: string | null,
  propertyLandlord?: UserProfile | null,
  propertySize?: string | null,
  propertyType?: string | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  address?: string | null,
  birthday?: string | null,
  createdAt: string,
  displayName?: string | null,
  email: string,
  gender?: string | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  properties?: ModelPropertyConnection | null,
  tenantContract?: Contract | null,
  tenantId?: string | null,
  updatedAt: string,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type ModelContractFilterInput = {
  and?: Array< ModelContractFilterInput | null > | null,
  contractDescription?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  monthlyRent?: ModelIntInput | null,
  not?: ModelContractFilterInput | null,
  or?: Array< ModelContractFilterInput | null > | null,
  propertyId?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract | null >,
  nextToken?: string | null,
};

export type ModelIncidentFilterInput = {
  and?: Array< ModelIncidentFilterInput | null > | null,
  contractId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelIncidentFilterInput | null,
  or?: Array< ModelIncidentFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPropertyFilterInput = {
  and?: Array< ModelPropertyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  landlordId?: ModelStringInput | null,
  not?: ModelPropertyFilterInput | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  propertyAddress?: ModelStringInput | null,
  propertyDescription?: ModelStringInput | null,
  propertySize?: ModelStringInput | null,
  propertyType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  birthday?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelContractConditionInput = {
  and?: Array< ModelContractConditionInput | null > | null,
  contractDescription?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  monthlyRent?: ModelIntInput | null,
  not?: ModelContractConditionInput | null,
  or?: Array< ModelContractConditionInput | null > | null,
  propertyId?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateContractInput = {
  contractDescription?: string | null,
  endDate?: string | null,
  id?: string | null,
  monthlyRent?: number | null,
  propertyId: string,
  startDate?: string | null,
};

export type ModelIncidentConditionInput = {
  and?: Array< ModelIncidentConditionInput | null > | null,
  contractId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelIncidentConditionInput | null,
  or?: Array< ModelIncidentConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateIncidentInput = {
  contractId: string,
  date?: string | null,
  description?: string | null,
  id?: string | null,
  status?: string | null,
};

export type ModelPropertyConditionInput = {
  and?: Array< ModelPropertyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  landlordId?: ModelStringInput | null,
  not?: ModelPropertyConditionInput | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  propertyAddress?: ModelStringInput | null,
  propertyDescription?: ModelStringInput | null,
  propertySize?: ModelStringInput | null,
  propertyType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePropertyInput = {
  id?: string | null,
  landlordId: string,
  propertyAddress?: string | null,
  propertyDescription?: string | null,
  propertySize?: string | null,
  propertyType?: string | null,
};

export type ModelUserProfileConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  birthday?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  address?: string | null,
  birthday?: string | null,
  displayName?: string | null,
  email: string,
  gender?: string | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  tenantId?: string | null,
};

export type DeleteContractInput = {
  id: string,
};

export type DeleteIncidentInput = {
  id: string,
};

export type DeletePropertyInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  email: string,
};

export type UpdateContractInput = {
  contractDescription?: string | null,
  endDate?: string | null,
  id: string,
  monthlyRent?: number | null,
  propertyId?: string | null,
  startDate?: string | null,
};

export type UpdateIncidentInput = {
  contractId?: string | null,
  date?: string | null,
  description?: string | null,
  id: string,
  status?: string | null,
};

export type UpdatePropertyInput = {
  id: string,
  landlordId?: string | null,
  propertyAddress?: string | null,
  propertyDescription?: string | null,
  propertySize?: string | null,
  propertyType?: string | null,
};

export type UpdateUserProfileInput = {
  address?: string | null,
  birthday?: string | null,
  displayName?: string | null,
  email: string,
  gender?: string | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  tenantId?: string | null,
};

export type ModelSubscriptionContractFilterInput = {
  and?: Array< ModelSubscriptionContractFilterInput | null > | null,
  contractDescription?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  monthlyRent?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionContractFilterInput | null > | null,
  propertyId?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIncidentFilterInput = {
  and?: Array< ModelSubscriptionIncidentFilterInput | null > | null,
  contractId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionIncidentFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  landlordId?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  propertyAddress?: ModelSubscriptionStringInput | null,
  propertyDescription?: ModelSubscriptionStringInput | null,
  propertySize?: ModelSubscriptionStringInput | null,
  propertyType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  birthday?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  givenName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  tenantId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetContractQueryVariables = {
  id: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetIncidentQueryVariables = {
  id: string,
};

export type GetIncidentQuery = {
  getIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  email: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListIncidentsQueryVariables = {
  filter?: ModelIncidentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncidentsQuery = {
  listIncidents?:  {
    __typename: "ModelIncidentConnection",
    items:  Array< {
      __typename: "Incident",
      contractId: string,
      createdAt: string,
      date?: string | null,
      description?: string | null,
      id: string,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  email?: string | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateContractMutationVariables = {
  condition?: ModelContractConditionInput | null,
  input: CreateContractInput,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateIncidentMutationVariables = {
  condition?: ModelIncidentConditionInput | null,
  input: CreateIncidentInput,
};

export type CreateIncidentMutation = {
  createIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePropertyMutationVariables = {
  condition?: ModelPropertyConditionInput | null,
  input: CreatePropertyInput,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteContractMutationVariables = {
  condition?: ModelContractConditionInput | null,
  input: DeleteContractInput,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteIncidentMutationVariables = {
  condition?: ModelIncidentConditionInput | null,
  input: DeleteIncidentInput,
};

export type DeleteIncidentMutation = {
  deleteIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePropertyMutationVariables = {
  condition?: ModelPropertyConditionInput | null,
  input: DeletePropertyInput,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateContractMutationVariables = {
  condition?: ModelContractConditionInput | null,
  input: UpdateContractInput,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateIncidentMutationVariables = {
  condition?: ModelIncidentConditionInput | null,
  input: UpdateIncidentInput,
};

export type UpdateIncidentMutation = {
  updateIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  condition?: ModelPropertyConditionInput | null,
  input: UpdatePropertyInput,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateIncidentSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentFilterInput | null,
};

export type OnCreateIncidentSubscription = {
  onCreateIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteIncidentSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentFilterInput | null,
};

export type OnDeleteIncidentSubscription = {
  onDeleteIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    createdAt: string,
    endDate?: string | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      createdAt: string,
      id: string,
      landlordId: string,
      propertyAddress?: string | null,
      propertyDescription?: string | null,
      propertySize?: string | null,
      propertyType?: string | null,
      updatedAt: string,
    } | null,
    propertyId: string,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateIncidentSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentFilterInput | null,
};

export type OnUpdateIncidentSubscription = {
  onUpdateIncident?:  {
    __typename: "Incident",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    activeContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    landlordId: string,
    propertyAddress?: string | null,
    propertyDescription?: string | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      address?: string | null,
      birthday?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: string | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    propertySize?: string | null,
    propertyType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    birthday?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: string | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    tenantContract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      startDate?: string | null,
      updatedAt: string,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};
