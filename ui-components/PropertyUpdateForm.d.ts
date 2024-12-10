import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    propertyAddress?: string;
    propertyType?: string;
    propertySize?: string;
    propertyDescription?: string;
};
export declare type PropertyUpdateFormValidationValues = {
    propertyAddress?: ValidationFunction<string>;
    propertyType?: ValidationFunction<string>;
    propertySize?: ValidationFunction<string>;
    propertyDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    propertyAddress?: PrimitiveOverrideProps<TextFieldProps>;
    propertyType?: PrimitiveOverrideProps<TextFieldProps>;
    propertySize?: PrimitiveOverrideProps<TextFieldProps>;
    propertyDescription?: PrimitiveOverrideProps<TextFieldProps>;
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
