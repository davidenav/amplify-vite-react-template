import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContractCreateFormInputValues = {
    startDate?: string;
    endDate?: string;
    monthlyRent?: number;
    contractDescription?: string;
};
export declare type ContractCreateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    monthlyRent?: ValidationFunction<number>;
    contractDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractCreateFormOverridesProps = {
    ContractCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    monthlyRent?: PrimitiveOverrideProps<TextFieldProps>;
    contractDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractCreateFormProps = React.PropsWithChildren<{
    overrides?: ContractCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContractCreateFormInputValues) => ContractCreateFormInputValues;
    onSuccess?: (fields: ContractCreateFormInputValues) => void;
    onError?: (fields: ContractCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractCreateFormInputValues) => ContractCreateFormInputValues;
    onValidate?: ContractCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContractCreateForm(props: ContractCreateFormProps): React.ReactElement;
