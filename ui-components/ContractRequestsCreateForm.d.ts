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
export declare type ContractRequestsCreateFormInputValues = {
    type?: string;
    status?: string;
    responseText?: string;
};
export declare type ContractRequestsCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    responseText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractRequestsCreateFormOverridesProps = {
    ContractRequestsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    responseText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractRequestsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContractRequestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContractRequestsCreateFormInputValues) => ContractRequestsCreateFormInputValues;
    onSuccess?: (fields: ContractRequestsCreateFormInputValues) => void;
    onError?: (fields: ContractRequestsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractRequestsCreateFormInputValues) => ContractRequestsCreateFormInputValues;
    onValidate?: ContractRequestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContractRequestsCreateForm(props: ContractRequestsCreateFormProps): React.ReactElement;
