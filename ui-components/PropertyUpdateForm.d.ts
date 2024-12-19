import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Property } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropertyUpdateFormInputValues = {
    displayName?: string;
    street?: string;
    city?: string;
    zip?: string;
    country?: string;
    type?: string;
    size?: number;
    numberOfRooms?: number;
    floor?: number;
    hasElevator?: boolean;
    hasBalcony?: boolean;
    hasParking?: boolean;
    hasSaferoom?: boolean;
    description?: string;
};
export declare type PropertyUpdateFormValidationValues = {
    displayName?: ValidationFunction<string>;
    street?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    size?: ValidationFunction<number>;
    numberOfRooms?: ValidationFunction<number>;
    floor?: ValidationFunction<number>;
    hasElevator?: ValidationFunction<boolean>;
    hasBalcony?: ValidationFunction<boolean>;
    hasParking?: ValidationFunction<boolean>;
    hasSaferoom?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    street?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfRooms?: PrimitiveOverrideProps<TextFieldProps>;
    floor?: PrimitiveOverrideProps<TextFieldProps>;
    hasElevator?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasBalcony?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasParking?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasSaferoom?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyUpdateFormProps = React.PropsWithChildren<{
    overrides?: PropertyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    property?: Property;
    onSubmit?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onSuccess?: (fields: PropertyUpdateFormInputValues) => void;
    onError?: (fields: PropertyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onValidate?: PropertyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyUpdateForm(props: PropertyUpdateFormProps): React.ReactElement;
