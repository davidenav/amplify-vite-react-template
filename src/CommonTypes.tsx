import { SelectionSet } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";

export const userProfileSelectionSet = ['displayName', 'givenName', 'lastName', 'email', 'phoneNumber', 'address', 'gender', 'birthday'] as const;
export type userProfileType = SelectionSet<Schema['UserProfile']['type'], typeof userProfileSelectionSet>
export const propertySelectionSet = ['id', 'landlordId', 'propertyAddress', 'propertyType', 'propertySize', 'propertyDescription'] as const;
export type propertyType = SelectionSet<Schema['Property']['type'], typeof propertySelectionSet>;

