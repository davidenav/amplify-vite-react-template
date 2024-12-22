import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type IncidentCreateFormInputValues = {
    title?: string;
    description?: string;
    status?: string;
    date?: string;
};
export declare type IncidentCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncidentCreateFormOverridesProps = {
    IncidentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncidentCreateFormProps = React.PropsWithChildren<{
    overrides?: IncidentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IncidentCreateFormInputValues) => IncidentCreateFormInputValues;
    onSuccess?: (fields: IncidentCreateFormInputValues) => void;
    onError?: (fields: IncidentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncidentCreateFormInputValues) => IncidentCreateFormInputValues;
    onValidate?: IncidentCreateFormValidationValues;
} & React.CSSProperties>;
export default function IncidentCreateForm(props: IncidentCreateFormProps): React.ReactElement;
