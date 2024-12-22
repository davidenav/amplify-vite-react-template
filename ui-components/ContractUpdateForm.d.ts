import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Contract } from "./graphql/types";
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
export declare type ContractUpdateFormInputValues = {
    startDate?: string;
    endDate?: string;
    monthlyRent?: number;
    paymentDayOfMonth?: number;
    rentCurrency?: string;
    contractDescription?: string;
    contractPdf?: string;
};
export declare type ContractUpdateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    monthlyRent?: ValidationFunction<number>;
    paymentDayOfMonth?: ValidationFunction<number>;
    rentCurrency?: ValidationFunction<string>;
    contractDescription?: ValidationFunction<string>;
    contractPdf?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractUpdateFormOverridesProps = {
    ContractUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    monthlyRent?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDayOfMonth?: PrimitiveOverrideProps<TextFieldProps>;
    rentCurrency?: PrimitiveOverrideProps<SelectFieldProps>;
    contractDescription?: PrimitiveOverrideProps<TextFieldProps>;
    contractPdf?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContractUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contract?: Contract;
    onSubmit?: (fields: ContractUpdateFormInputValues) => ContractUpdateFormInputValues;
    onSuccess?: (fields: ContractUpdateFormInputValues) => void;
    onError?: (fields: ContractUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractUpdateFormInputValues) => ContractUpdateFormInputValues;
    onValidate?: ContractUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContractUpdateForm(props: ContractUpdateFormProps): React.ReactElement;
