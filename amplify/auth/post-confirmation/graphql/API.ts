/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Contract = {
  __typename: "Contract",
  contractDescription?: string | null,
  contractPdf?: string | null,
  contractRequests?: ModelContractRequestsConnection | null,
  createdAt: string,
  endDate?: string | null,
  extensionOption?: ContractExtensionOption | null,
  id: string,
  incidents?: ModelIncidentConnection | null,
  monthlyRent?: number | null,
  property?: Property | null,
  propertyId: string,
  rentCurrency?: ContractRentCurrency | null,
  startDate?: string | null,
  tenant?: UserProfile | null,
  tenantId?: string | null,
  updatedAt: string,
};

export type ModelContractRequestsConnection = {
  __typename: "ModelContractRequestsConnection",
  items:  Array<ContractRequests | null >,
  nextToken?: string | null,
};

export type ContractRequests = {
  __typename: "ContractRequests",
  contract?: Contract | null,
  contractId: string,
  createdAt: string,
  id: string,
  responseText?: string | null,
  status?: ContractRequestsStatus | null,
  tenant?: UserProfile | null,
  tenantId: string,
  type?: ContractRequestsType | null,
  updatedAt: string,
};

export enum ContractRequestsStatus {
  Approved = "Approved",
  Pending = "Pending",
  Rejected = "Rejected",
}


export type UserProfile = {
  __typename: "UserProfile",
  birthday?: string | null,
  city?: string | null,
  contractRequests?: ModelContractRequestsConnection | null,
  country?: string | null,
  createdAt: string,
  displayName?: string | null,
  email: string,
  gender?: UserProfileGender | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  properties?: ModelPropertyConnection | null,
  street?: string | null,
  tenantContracts?: ModelContractConnection | null,
  updatedAt: string,
  zip?: string | null,
};

export enum UserProfileGender {
  Female = "Female",
  Male = "Male",
  Other = "Other",
}


export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type Property = {
  __typename: "Property",
  city?: string | null,
  contracts?: ModelContractConnection | null,
  country?: string | null,
  createdAt: string,
  description?: string | null,
  displayName?: string | null,
  floor?: number | null,
  hasBalcony?: boolean | null,
  hasElevator?: boolean | null,
  hasParking?: boolean | null,
  hasSaferoom?: boolean | null,
  id: string,
  landlordId: string,
  numberOfRooms?: number | null,
  propertyLandlord?: UserProfile | null,
  size?: number | null,
  street?: string | null,
  type?: PropertyType | null,
  updatedAt: string,
  zip?: string | null,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract | null >,
  nextToken?: string | null,
};

export enum PropertyType {
  Apartment = "Apartment",
  House = "House",
  Penthouse = "Penthouse",
}


export enum ContractRequestsType {
  Extension = "Extension",
  New = "New",
  Termination = "Termination",
}


export type ContractExtensionOption = {
  __typename: "ContractExtensionOption",
  extension?: boolean | null,
  extensionPeriod?: number | null,
  extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
  extensionPrice?: number | null,
  extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
};

export enum ContractExtensionOptionExtensionPeriodType {
  Days = "Days",
  Months = "Months",
  Years = "Years",
}


export enum ContractExtensionOptionExtensionPriceCurrency {
  EUR = "EUR",
  ILS = "ILS",
  USD = "USD",
}


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
  status?: IncidentStatus | null,
  title?: string | null,
  updatedAt: string,
};

export enum IncidentStatus {
  Closed = "Closed",
  Open = "Open",
}


export enum ContractRentCurrency {
  EUR = "EUR",
  ILS = "ILS",
  USD = "USD",
}


export type ModelContractRequestsFilterInput = {
  and?: Array< ModelContractRequestsFilterInput | null > | null,
  contractId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelContractRequestsFilterInput | null,
  or?: Array< ModelContractRequestsFilterInput | null > | null,
  responseText?: ModelStringInput | null,
  status?: ModelContractRequestsStatusInput | null,
  tenantId?: ModelStringInput | null,
  type?: ModelContractRequestsTypeInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelContractRequestsStatusInput = {
  eq?: ContractRequestsStatus | null,
  ne?: ContractRequestsStatus | null,
};

export type ModelContractRequestsTypeInput = {
  eq?: ContractRequestsType | null,
  ne?: ContractRequestsType | null,
};

export type ModelContractFilterInput = {
  and?: Array< ModelContractFilterInput | null > | null,
  contractDescription?: ModelStringInput | null,
  contractPdf?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  monthlyRent?: ModelIntInput | null,
  not?: ModelContractFilterInput | null,
  or?: Array< ModelContractFilterInput | null > | null,
  propertyId?: ModelIDInput | null,
  rentCurrency?: ModelContractRentCurrencyInput | null,
  startDate?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelContractRentCurrencyInput = {
  eq?: ContractRentCurrency | null,
  ne?: ContractRentCurrency | null,
};

export type ModelIncidentFilterInput = {
  and?: Array< ModelIncidentFilterInput | null > | null,
  contractId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelIncidentFilterInput | null,
  or?: Array< ModelIncidentFilterInput | null > | null,
  status?: ModelIncidentStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIncidentStatusInput = {
  eq?: IncidentStatus | null,
  ne?: IncidentStatus | null,
};

export type ModelPropertyFilterInput = {
  and?: Array< ModelPropertyFilterInput | null > | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  floor?: ModelIntInput | null,
  hasBalcony?: ModelBooleanInput | null,
  hasElevator?: ModelBooleanInput | null,
  hasParking?: ModelBooleanInput | null,
  hasSaferoom?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  landlordId?: ModelStringInput | null,
  not?: ModelPropertyFilterInput | null,
  numberOfRooms?: ModelIntInput | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  size?: ModelIntInput | null,
  street?: ModelStringInput | null,
  type?: ModelPropertyTypeInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelPropertyTypeInput = {
  eq?: PropertyType | null,
  ne?: PropertyType | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  birthday?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelUserProfileGenderInput | null,
  givenName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type ModelUserProfileGenderInput = {
  eq?: UserProfileGender | null,
  ne?: UserProfileGender | null,
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
  contractPdf?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  monthlyRent?: ModelIntInput | null,
  not?: ModelContractConditionInput | null,
  or?: Array< ModelContractConditionInput | null > | null,
  propertyId?: ModelIDInput | null,
  rentCurrency?: ModelContractRentCurrencyInput | null,
  startDate?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateContractInput = {
  contractDescription?: string | null,
  contractPdf?: string | null,
  endDate?: string | null,
  extensionOption?: ContractExtensionOptionInput | null,
  id?: string | null,
  monthlyRent?: number | null,
  propertyId: string,
  rentCurrency?: ContractRentCurrency | null,
  startDate?: string | null,
  tenantId?: string | null,
};

export type ContractExtensionOptionInput = {
  extension?: boolean | null,
  extensionPeriod?: number | null,
  extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
  extensionPrice?: number | null,
  extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
};

export type ModelContractRequestsConditionInput = {
  and?: Array< ModelContractRequestsConditionInput | null > | null,
  contractId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelContractRequestsConditionInput | null,
  or?: Array< ModelContractRequestsConditionInput | null > | null,
  responseText?: ModelStringInput | null,
  status?: ModelContractRequestsStatusInput | null,
  tenantId?: ModelStringInput | null,
  type?: ModelContractRequestsTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateContractRequestsInput = {
  contractId: string,
  id?: string | null,
  responseText?: string | null,
  status?: ContractRequestsStatus | null,
  tenantId: string,
  type?: ContractRequestsType | null,
};

export type ModelIncidentConditionInput = {
  and?: Array< ModelIncidentConditionInput | null > | null,
  contractId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelIncidentConditionInput | null,
  or?: Array< ModelIncidentConditionInput | null > | null,
  status?: ModelIncidentStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateIncidentInput = {
  contractId: string,
  date?: string | null,
  description?: string | null,
  id?: string | null,
  status?: IncidentStatus | null,
  title?: string | null,
};

export type ModelPropertyConditionInput = {
  and?: Array< ModelPropertyConditionInput | null > | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  floor?: ModelIntInput | null,
  hasBalcony?: ModelBooleanInput | null,
  hasElevator?: ModelBooleanInput | null,
  hasParking?: ModelBooleanInput | null,
  hasSaferoom?: ModelBooleanInput | null,
  landlordId?: ModelStringInput | null,
  not?: ModelPropertyConditionInput | null,
  numberOfRooms?: ModelIntInput | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  size?: ModelIntInput | null,
  street?: ModelStringInput | null,
  type?: ModelPropertyTypeInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type CreatePropertyInput = {
  city?: string | null,
  country?: string | null,
  description?: string | null,
  displayName?: string | null,
  floor?: number | null,
  hasBalcony?: boolean | null,
  hasElevator?: boolean | null,
  hasParking?: boolean | null,
  hasSaferoom?: boolean | null,
  id?: string | null,
  landlordId: string,
  numberOfRooms?: number | null,
  size?: number | null,
  street?: string | null,
  type?: PropertyType | null,
  zip?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  birthday?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  gender?: ModelUserProfileGenderInput | null,
  givenName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  birthday?: string | null,
  city?: string | null,
  country?: string | null,
  displayName?: string | null,
  email: string,
  gender?: UserProfileGender | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  street?: string | null,
  zip?: string | null,
};

export type DeleteContractInput = {
  id: string,
};

export type DeleteContractRequestsInput = {
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
  contractPdf?: string | null,
  endDate?: string | null,
  extensionOption?: ContractExtensionOptionInput | null,
  id: string,
  monthlyRent?: number | null,
  propertyId?: string | null,
  rentCurrency?: ContractRentCurrency | null,
  startDate?: string | null,
  tenantId?: string | null,
};

export type UpdateContractRequestsInput = {
  contractId?: string | null,
  id: string,
  responseText?: string | null,
  status?: ContractRequestsStatus | null,
  tenantId?: string | null,
  type?: ContractRequestsType | null,
};

export type UpdateIncidentInput = {
  contractId?: string | null,
  date?: string | null,
  description?: string | null,
  id: string,
  status?: IncidentStatus | null,
  title?: string | null,
};

export type UpdatePropertyInput = {
  city?: string | null,
  country?: string | null,
  description?: string | null,
  displayName?: string | null,
  floor?: number | null,
  hasBalcony?: boolean | null,
  hasElevator?: boolean | null,
  hasParking?: boolean | null,
  hasSaferoom?: boolean | null,
  id: string,
  landlordId?: string | null,
  numberOfRooms?: number | null,
  size?: number | null,
  street?: string | null,
  type?: PropertyType | null,
  zip?: string | null,
};

export type UpdateUserProfileInput = {
  birthday?: string | null,
  city?: string | null,
  country?: string | null,
  displayName?: string | null,
  email: string,
  gender?: UserProfileGender | null,
  givenName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  street?: string | null,
  zip?: string | null,
};

export type ModelSubscriptionContractFilterInput = {
  and?: Array< ModelSubscriptionContractFilterInput | null > | null,
  contractDescription?: ModelSubscriptionStringInput | null,
  contractPdf?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  monthlyRent?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionContractFilterInput | null > | null,
  propertyId?: ModelSubscriptionIDInput | null,
  rentCurrency?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  tenantId?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionContractRequestsFilterInput = {
  and?: Array< ModelSubscriptionContractRequestsFilterInput | null > | null,
  contractId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionContractRequestsFilterInput | null > | null,
  responseText?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tenantId?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIncidentFilterInput = {
  and?: Array< ModelSubscriptionIncidentFilterInput | null > | null,
  contractId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionIncidentFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  floor?: ModelSubscriptionIntInput | null,
  hasBalcony?: ModelSubscriptionBooleanInput | null,
  hasElevator?: ModelSubscriptionBooleanInput | null,
  hasParking?: ModelSubscriptionBooleanInput | null,
  hasSaferoom?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  landlordId?: ModelSubscriptionStringInput | null,
  numberOfRooms?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  size?: ModelSubscriptionIntInput | null,
  street?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  birthday?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  givenName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  street?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
};

export type GetContractQueryVariables = {
  id: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetContractRequestsQueryVariables = {
  id: string,
};

export type GetContractRequestsQuery = {
  getContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  email: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type ListContractRequestsQueryVariables = {
  filter?: ModelContractRequestsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractRequestsQuery = {
  listContractRequests?:  {
    __typename: "ModelContractRequestsConnection",
    items:  Array< {
      __typename: "ContractRequests",
      contractId: string,
      createdAt: string,
      id: string,
      responseText?: string | null,
      status?: ContractRequestsStatus | null,
      tenantId: string,
      type?: ContractRequestsType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
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
      status?: IncidentStatus | null,
      title?: string | null,
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
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
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
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
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
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateContractRequestsMutationVariables = {
  condition?: ModelContractRequestsConditionInput | null,
  input: CreateContractRequestsInput,
};

export type CreateContractRequestsMutation = {
  createContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
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
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
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
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteContractRequestsMutationVariables = {
  condition?: ModelContractRequestsConditionInput | null,
  input: DeleteContractRequestsInput,
};

export type DeleteContractRequestsMutation = {
  deleteContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
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
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
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
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateContractRequestsMutationVariables = {
  condition?: ModelContractRequestsConditionInput | null,
  input: UpdateContractRequestsInput,
};

export type UpdateContractRequestsMutation = {
  updateContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
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
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnCreateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateContractRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionContractRequestsFilterInput | null,
};

export type OnCreateContractRequestsSubscription = {
  onCreateContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnDeleteContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionContractRequestsFilterInput | null,
};

export type OnDeleteContractRequestsSubscription = {
  onDeleteContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnUpdateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    contractDescription?: string | null,
    contractPdf?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    endDate?: string | null,
    extensionOption?:  {
      __typename: "ContractExtensionOption",
      extension?: boolean | null,
      extensionPeriod?: number | null,
      extensionPeriodType?: ContractExtensionOptionExtensionPeriodType | null,
      extensionPrice?: number | null,
      extensionPriceCurrency?: ContractExtensionOptionExtensionPriceCurrency | null,
    } | null,
    id: string,
    incidents?:  {
      __typename: "ModelIncidentConnection",
      nextToken?: string | null,
    } | null,
    monthlyRent?: number | null,
    property?:  {
      __typename: "Property",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      displayName?: string | null,
      floor?: number | null,
      hasBalcony?: boolean | null,
      hasElevator?: boolean | null,
      hasParking?: boolean | null,
      hasSaferoom?: boolean | null,
      id: string,
      landlordId: string,
      numberOfRooms?: number | null,
      size?: number | null,
      street?: string | null,
      type?: PropertyType | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    propertyId: string,
    rentCurrency?: ContractRentCurrency | null,
    startDate?: string | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionContractRequestsFilterInput | null,
};

export type OnUpdateContractRequestsSubscription = {
  onUpdateContractRequests?:  {
    __typename: "ContractRequests",
    contract?:  {
      __typename: "Contract",
      contractDescription?: string | null,
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    id: string,
    responseText?: string | null,
    status?: ContractRequestsStatus | null,
    tenant?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    tenantId: string,
    type?: ContractRequestsType | null,
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
      contractPdf?: string | null,
      createdAt: string,
      endDate?: string | null,
      id: string,
      monthlyRent?: number | null,
      propertyId: string,
      rentCurrency?: ContractRentCurrency | null,
      startDate?: string | null,
      tenantId?: string | null,
      updatedAt: string,
    } | null,
    contractId: string,
    createdAt: string,
    date?: string | null,
    description?: string | null,
    id: string,
    status?: IncidentStatus | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    city?: string | null,
    contracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    displayName?: string | null,
    floor?: number | null,
    hasBalcony?: boolean | null,
    hasElevator?: boolean | null,
    hasParking?: boolean | null,
    hasSaferoom?: boolean | null,
    id: string,
    landlordId: string,
    numberOfRooms?: number | null,
    propertyLandlord?:  {
      __typename: "UserProfile",
      birthday?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      displayName?: string | null,
      email: string,
      gender?: UserProfileGender | null,
      givenName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      street?: string | null,
      updatedAt: string,
      zip?: string | null,
    } | null,
    size?: number | null,
    street?: string | null,
    type?: PropertyType | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    birthday?: string | null,
    city?: string | null,
    contractRequests?:  {
      __typename: "ModelContractRequestsConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    displayName?: string | null,
    email: string,
    gender?: UserProfileGender | null,
    givenName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    street?: string | null,
    tenantContracts?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    zip?: string | null,
  } | null,
};
