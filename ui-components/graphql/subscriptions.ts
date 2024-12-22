/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
    onCreateContract(filter: $filter) {
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
`;
export const onCreateContractRequests = /* GraphQL */ `
  subscription OnCreateContractRequests(
    $filter: ModelSubscriptionContractRequestsFilterInput
  ) {
    onCreateContractRequests(filter: $filter) {
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
`;
export const onCreateIncident = /* GraphQL */ `
  subscription OnCreateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onCreateIncident(filter: $filter) {
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
`;
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onCreateProperty(filter: $filter) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
    onDeleteContract(filter: $filter) {
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
`;
export const onDeleteContractRequests = /* GraphQL */ `
  subscription OnDeleteContractRequests(
    $filter: ModelSubscriptionContractRequestsFilterInput
  ) {
    onDeleteContractRequests(filter: $filter) {
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
`;
export const onDeleteIncident = /* GraphQL */ `
  subscription OnDeleteIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onDeleteIncident(filter: $filter) {
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
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onDeleteProperty(filter: $filter) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
    onUpdateContract(filter: $filter) {
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
`;
export const onUpdateContractRequests = /* GraphQL */ `
  subscription OnUpdateContractRequests(
    $filter: ModelSubscriptionContractRequestsFilterInput
  ) {
    onUpdateContractRequests(filter: $filter) {
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
`;
export const onUpdateIncident = /* GraphQL */ `
  subscription OnUpdateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onUpdateIncident(filter: $filter) {
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
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onUpdateProperty(filter: $filter) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
