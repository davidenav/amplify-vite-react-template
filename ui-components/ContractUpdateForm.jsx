/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContract } from "./graphql/queries";
import { updateContract } from "./graphql/mutations";
const client = generateClient();
export default function ContractUpdateForm(props) {
  const {
    id: idProp,
    contract: contractModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    startDate: "",
    endDate: "",
    monthlyRent: "",
    paymentDayOfMonth: "",
    rentCurrency: "",
    contractDescription: "",
    contractPdf: "",
  };
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [monthlyRent, setMonthlyRent] = React.useState(
    initialValues.monthlyRent
  );
  const [paymentDayOfMonth, setPaymentDayOfMonth] = React.useState(
    initialValues.paymentDayOfMonth
  );
  const [rentCurrency, setRentCurrency] = React.useState(
    initialValues.rentCurrency
  );
  const [contractDescription, setContractDescription] = React.useState(
    initialValues.contractDescription
  );
  const [contractPdf, setContractPdf] = React.useState(
    initialValues.contractPdf
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contractRecord
      ? { ...initialValues, ...contractRecord }
      : initialValues;
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setMonthlyRent(cleanValues.monthlyRent);
    setPaymentDayOfMonth(cleanValues.paymentDayOfMonth);
    setRentCurrency(cleanValues.rentCurrency);
    setContractDescription(cleanValues.contractDescription);
    setContractPdf(cleanValues.contractPdf);
    setErrors({});
  };
  const [contractRecord, setContractRecord] = React.useState(contractModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContract.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContract
        : contractModelProp;
      setContractRecord(record);
    };
    queryData();
  }, [idProp, contractModelProp]);
  React.useEffect(resetStateValues, [contractRecord]);
  const validations = {
    startDate: [{ type: "Required" }],
    endDate: [{ type: "Required" }],
    monthlyRent: [{ type: "Required" }],
    paymentDayOfMonth: [{ type: "Required" }],
    rentCurrency: [],
    contractDescription: [],
    contractPdf: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          startDate,
          endDate,
          monthlyRent,
          paymentDayOfMonth,
          rentCurrency: rentCurrency ?? null,
          contractDescription: contractDescription ?? null,
          contractPdf,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateContract.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contractRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContractUpdateForm")}
      {...rest}
    >
      <TextField
        label="Start date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate: value,
              endDate,
              monthlyRent,
              paymentDayOfMonth,
              rentCurrency,
              contractDescription,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              endDate: value,
              monthlyRent,
              paymentDayOfMonth,
              rentCurrency,
              contractDescription,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <TextField
        label="Monthly rent"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={monthlyRent}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              startDate,
              endDate,
              monthlyRent: value,
              paymentDayOfMonth,
              rentCurrency,
              contractDescription,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.monthlyRent ?? value;
          }
          if (errors.monthlyRent?.hasError) {
            runValidationTasks("monthlyRent", value);
          }
          setMonthlyRent(value);
        }}
        onBlur={() => runValidationTasks("monthlyRent", monthlyRent)}
        errorMessage={errors.monthlyRent?.errorMessage}
        hasError={errors.monthlyRent?.hasError}
        {...getOverrideProps(overrides, "monthlyRent")}
      ></TextField>
      <TextField
        label="Payment day of month"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={paymentDayOfMonth}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              startDate,
              endDate,
              monthlyRent,
              paymentDayOfMonth: value,
              rentCurrency,
              contractDescription,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.paymentDayOfMonth ?? value;
          }
          if (errors.paymentDayOfMonth?.hasError) {
            runValidationTasks("paymentDayOfMonth", value);
          }
          setPaymentDayOfMonth(value);
        }}
        onBlur={() =>
          runValidationTasks("paymentDayOfMonth", paymentDayOfMonth)
        }
        errorMessage={errors.paymentDayOfMonth?.errorMessage}
        hasError={errors.paymentDayOfMonth?.hasError}
        {...getOverrideProps(overrides, "paymentDayOfMonth")}
      ></TextField>
      <SelectField
        label="Rent currency"
        placeholder="Please select an option"
        isDisabled={false}
        value={rentCurrency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              endDate,
              monthlyRent,
              paymentDayOfMonth,
              rentCurrency: value,
              contractDescription,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.rentCurrency ?? value;
          }
          if (errors.rentCurrency?.hasError) {
            runValidationTasks("rentCurrency", value);
          }
          setRentCurrency(value);
        }}
        onBlur={() => runValidationTasks("rentCurrency", rentCurrency)}
        errorMessage={errors.rentCurrency?.errorMessage}
        hasError={errors.rentCurrency?.hasError}
        {...getOverrideProps(overrides, "rentCurrency")}
      >
        <option
          children="Usd"
          value="USD"
          {...getOverrideProps(overrides, "rentCurrencyoption0")}
        ></option>
        <option
          children="Eur"
          value="EUR"
          {...getOverrideProps(overrides, "rentCurrencyoption1")}
        ></option>
        <option
          children="Ils"
          value="ILS"
          {...getOverrideProps(overrides, "rentCurrencyoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Contract description"
        isRequired={false}
        isReadOnly={false}
        value={contractDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              endDate,
              monthlyRent,
              paymentDayOfMonth,
              rentCurrency,
              contractDescription: value,
              contractPdf,
            };
            const result = onChange(modelFields);
            value = result?.contractDescription ?? value;
          }
          if (errors.contractDescription?.hasError) {
            runValidationTasks("contractDescription", value);
          }
          setContractDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("contractDescription", contractDescription)
        }
        errorMessage={errors.contractDescription?.errorMessage}
        hasError={errors.contractDescription?.hasError}
        {...getOverrideProps(overrides, "contractDescription")}
      ></TextField>
      <TextField
        label="Contract pdf"
        isRequired={true}
        isReadOnly={false}
        value={contractPdf}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              endDate,
              monthlyRent,
              paymentDayOfMonth,
              rentCurrency,
              contractDescription,
              contractPdf: value,
            };
            const result = onChange(modelFields);
            value = result?.contractPdf ?? value;
          }
          if (errors.contractPdf?.hasError) {
            runValidationTasks("contractPdf", value);
          }
          setContractPdf(value);
        }}
        onBlur={() => runValidationTasks("contractPdf", contractPdf)}
        errorMessage={errors.contractPdf?.errorMessage}
        hasError={errors.contractPdf?.hasError}
        {...getOverrideProps(overrides, "contractPdf")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || contractModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || contractModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
