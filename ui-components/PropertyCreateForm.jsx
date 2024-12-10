/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createProperty } from "./graphql/mutations";
const client = generateClient();
export default function PropertyCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    landlordIdInput,
    ...rest
  } = props;
  const initialValues = {
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    propertyDescription: "",
  };
  const [propertyAddress, setPropertyAddress] = React.useState(
    initialValues.propertyAddress
  );
  const [propertyType, setPropertyType] = React.useState(
    initialValues.propertyType
  );
  const [propertySize, setPropertySize] = React.useState(
    initialValues.propertySize
  );
  const [propertyDescription, setPropertyDescription] = React.useState(
    initialValues.propertyDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPropertyAddress(initialValues.propertyAddress);
    setPropertyType(initialValues.propertyType);
    setPropertySize(initialValues.propertySize);
    setPropertyDescription(initialValues.propertyDescription);
    setErrors({});
  };
  const validations = {
    propertyAddress: [],
    propertyType: [],
    propertySize: [],
    propertyDescription: [],
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
          propertyAddress,
          propertyType,
          propertySize,
          propertyDescription,
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
            query: createProperty.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
                landlordId: landlordIdInput,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyCreateForm")}
      {...rest}
    >
      <TextField
        label="Property address"
        isRequired={false}
        isReadOnly={false}
        value={propertyAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              propertyAddress: value,
              propertyType,
              propertySize,
              propertyDescription,
            };
            const result = onChange(modelFields);
            value = result?.propertyAddress ?? value;
          }
          if (errors.propertyAddress?.hasError) {
            runValidationTasks("propertyAddress", value);
          }
          setPropertyAddress(value);
        }}
        onBlur={() => runValidationTasks("propertyAddress", propertyAddress)}
        errorMessage={errors.propertyAddress?.errorMessage}
        hasError={errors.propertyAddress?.hasError}
        {...getOverrideProps(overrides, "propertyAddress")}
      ></TextField>
      <TextField
        label="Property type"
        isRequired={false}
        isReadOnly={false}
        value={propertyType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              propertyAddress,
              propertyType: value,
              propertySize,
              propertyDescription,
            };
            const result = onChange(modelFields);
            value = result?.propertyType ?? value;
          }
          if (errors.propertyType?.hasError) {
            runValidationTasks("propertyType", value);
          }
          setPropertyType(value);
        }}
        onBlur={() => runValidationTasks("propertyType", propertyType)}
        errorMessage={errors.propertyType?.errorMessage}
        hasError={errors.propertyType?.hasError}
        {...getOverrideProps(overrides, "propertyType")}
      ></TextField>
      <TextField
        label="Property size"
        isRequired={false}
        isReadOnly={false}
        value={propertySize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              propertyAddress,
              propertyType,
              propertySize: value,
              propertyDescription,
            };
            const result = onChange(modelFields);
            value = result?.propertySize ?? value;
          }
          if (errors.propertySize?.hasError) {
            runValidationTasks("propertySize", value);
          }
          setPropertySize(value);
        }}
        onBlur={() => runValidationTasks("propertySize", propertySize)}
        errorMessage={errors.propertySize?.errorMessage}
        hasError={errors.propertySize?.hasError}
        {...getOverrideProps(overrides, "propertySize")}
      ></TextField>
      <TextField
        label="Property description"
        isRequired={false}
        isReadOnly={false}
        value={propertyDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              propertyAddress,
              propertyType,
              propertySize,
              propertyDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.propertyDescription ?? value;
          }
          if (errors.propertyDescription?.hasError) {
            runValidationTasks("propertyDescription", value);
          }
          setPropertyDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("propertyDescription", propertyDescription)
        }
        errorMessage={errors.propertyDescription?.errorMessage}
        hasError={errors.propertyDescription?.hasError}
        {...getOverrideProps(overrides, "propertyDescription")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
