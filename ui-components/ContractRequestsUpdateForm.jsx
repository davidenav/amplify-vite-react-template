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
import { getContractRequests } from "./graphql/queries";
import { updateContractRequests } from "./graphql/mutations";
const client = generateClient();
export default function ContractRequestsUpdateForm(props) {
  const {
    id: idProp,
    contractRequests: contractRequestsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    status: "",
    responseText: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [responseText, setResponseText] = React.useState(
    initialValues.responseText
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contractRequestsRecord
      ? { ...initialValues, ...contractRequestsRecord }
      : initialValues;
    setType(cleanValues.type);
    setStatus(cleanValues.status);
    setResponseText(cleanValues.responseText);
    setErrors({});
  };
  const [contractRequestsRecord, setContractRequestsRecord] = React.useState(
    contractRequestsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContractRequests.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContractRequests
        : contractRequestsModelProp;
      setContractRequestsRecord(record);
    };
    queryData();
  }, [idProp, contractRequestsModelProp]);
  React.useEffect(resetStateValues, [contractRequestsRecord]);
  const validations = {
    type: [],
    status: [],
    responseText: [],
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
          type: type ?? null,
          status: status ?? null,
          responseText: responseText ?? null,
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
            query: updateContractRequests.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contractRequestsRecord.id,
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
      {...getOverrideProps(overrides, "ContractRequestsUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              status,
              responseText,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="New"
          value="New"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Extension"
          value="Extension"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Termination"
          value="Termination"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              status: value,
              responseText,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="Pending"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Approved"
          value="Approved"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Rejected"
          value="Rejected"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Response text"
        isRequired={false}
        isReadOnly={false}
        value={responseText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              status,
              responseText: value,
            };
            const result = onChange(modelFields);
            value = result?.responseText ?? value;
          }
          if (errors.responseText?.hasError) {
            runValidationTasks("responseText", value);
          }
          setResponseText(value);
        }}
        onBlur={() => runValidationTasks("responseText", responseText)}
        errorMessage={errors.responseText?.errorMessage}
        hasError={errors.responseText?.hasError}
        {...getOverrideProps(overrides, "responseText")}
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
          isDisabled={!(idProp || contractRequestsModelProp)}
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
              !(idProp || contractRequestsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
