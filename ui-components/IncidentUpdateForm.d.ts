import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Incident } from "./graphql/types";
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
export declare type IncidentUpdateFormInputValues = {
    description?: string;
    status?: string;
    date?: string;
};
export declare type IncidentUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncidentUpdateFormOverridesProps = {
    IncidentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncidentUpdateFormProps = React.PropsWithChildren<{
    overrides?: IncidentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    incident?: Incident;
    onSubmit?: (fields: IncidentUpdateFormInputValues) => IncidentUpdateFormInputValues;
    onSuccess?: (fields: IncidentUpdateFormInputValues) => void;
    onError?: (fields: IncidentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncidentUpdateFormInputValues) => IncidentUpdateFormInputValues;
    onValidate?: IncidentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IncidentUpdateForm(props: IncidentUpdateFormProps): React.ReactElement;
