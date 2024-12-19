import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PropertyCreateFormInputValues = {
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
export declare type PropertyCreateFormValidationValues = {
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
export declare type PropertyCreateFormOverridesProps = {
    PropertyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PropertyCreateFormProps = React.PropsWithChildren<{
    overrides?: PropertyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onSuccess?: (fields: PropertyCreateFormInputValues) => void;
    onError?: (fields: PropertyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onValidate?: PropertyCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyCreateForm(props: PropertyCreateFormProps): React.ReactElement;
