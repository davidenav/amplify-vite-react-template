import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContractRequests } from "./graphql/types";
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
export declare type ContractRequestsUpdateFormInputValues = {
    type?: string;
    status?: string;
    responseText?: string;
};
export declare type ContractRequestsUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    responseText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractRequestsUpdateFormOverridesProps = {
    ContractRequestsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    responseText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractRequestsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContractRequestsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contractRequests?: ContractRequests;
    onSubmit?: (fields: ContractRequestsUpdateFormInputValues) => ContractRequestsUpdateFormInputValues;
    onSuccess?: (fields: ContractRequestsUpdateFormInputValues) => void;
    onError?: (fields: ContractRequestsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractRequestsUpdateFormInputValues) => ContractRequestsUpdateFormInputValues;
    onValidate?: ContractRequestsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContractRequestsUpdateForm(props: ContractRequestsUpdateFormProps): React.ReactElement;
