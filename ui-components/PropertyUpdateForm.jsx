/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProperty } from "./graphql/queries";
import { updateProperty } from "./graphql/mutations";
const client = generateClient();
export default function PropertyUpdateForm(props) {
  const {
    id: idProp,
    property: propertyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    displayName: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    type: "",
    size: "",
    numberOfRooms: "",
    floor: "",
    hasElevator: false,
    hasBalcony: false,
    hasParking: false,
    hasSaferoom: false,
    description: "",
  };
  const [displayName, setDisplayName] = React.useState(
    initialValues.displayName
  );
  const [street, setStreet] = React.useState(initialValues.street);
  const [city, setCity] = React.useState(initialValues.city);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [country, setCountry] = React.useState(initialValues.country);
  const [type, setType] = React.useState(initialValues.type);
  const [size, setSize] = React.useState(initialValues.size);
  const [numberOfRooms, setNumberOfRooms] = React.useState(
    initialValues.numberOfRooms
  );
  const [floor, setFloor] = React.useState(initialValues.floor);
  const [hasElevator, setHasElevator] = React.useState(
    initialValues.hasElevator
  );
  const [hasBalcony, setHasBalcony] = React.useState(initialValues.hasBalcony);
  const [hasParking, setHasParking] = React.useState(initialValues.hasParking);
  const [hasSaferoom, setHasSaferoom] = React.useState(
    initialValues.hasSaferoom
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRecord
      ? { ...initialValues, ...propertyRecord }
      : initialValues;
    setDisplayName(cleanValues.displayName);
    setStreet(cleanValues.street);
    setCity(cleanValues.city);
    setZip(cleanValues.zip);
    setCountry(cleanValues.country);
    setType(cleanValues.type);
    setSize(cleanValues.size);
    setNumberOfRooms(cleanValues.numberOfRooms);
    setFloor(cleanValues.floor);
    setHasElevator(cleanValues.hasElevator);
    setHasBalcony(cleanValues.hasBalcony);
    setHasParking(cleanValues.hasParking);
    setHasSaferoom(cleanValues.hasSaferoom);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [propertyRecord, setPropertyRecord] = React.useState(propertyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProperty.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProperty
        : propertyModelProp;
      setPropertyRecord(record);
    };
    queryData();
  }, [idProp, propertyModelProp]);
  React.useEffect(resetStateValues, [propertyRecord]);
  const validations = {
    displayName: [],
    street: [],
    city: [],
    zip: [],
    country: [],
    type: [],
    size: [],
    numberOfRooms: [],
    floor: [],
    hasElevator: [],
    hasBalcony: [],
    hasParking: [],
    hasSaferoom: [],
    description: [],
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
          displayName: displayName ?? null,
          street: street ?? null,
          city: city ?? null,
          zip: zip ?? null,
          country: country ?? null,
          type: type ?? null,
          size: size ?? null,
          numberOfRooms: numberOfRooms ?? null,
          floor: floor ?? null,
          hasElevator: hasElevator ?? null,
          hasBalcony: hasBalcony ?? null,
          hasParking: hasParking ?? null,
          hasSaferoom: hasSaferoom ?? null,
          description: description ?? null,
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
            query: updateProperty.replaceAll("__typename", ""),
            variables: {
              input: {
                id: propertyRecord.id,
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
      {...getOverrideProps(overrides, "PropertyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Display name"
        isRequired={false}
        isReadOnly={false}
        value={displayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName: value,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.displayName ?? value;
          }
          if (errors.displayName?.hasError) {
            runValidationTasks("displayName", value);
          }
          setDisplayName(value);
        }}
        onBlur={() => runValidationTasks("displayName", displayName)}
        errorMessage={errors.displayName?.errorMessage}
        hasError={errors.displayName?.hasError}
        {...getOverrideProps(overrides, "displayName")}
      ></TextField>
      <TextField
        label="Street"
        isRequired={false}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street: value,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city: value,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip: value,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country: value,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type: value,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
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
          children="House"
          value="House"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Apartment"
          value="Apartment"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Penthouse"
          value="Penthouse"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={size}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size: value,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Number of rooms"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfRooms}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms: value,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.numberOfRooms ?? value;
          }
          if (errors.numberOfRooms?.hasError) {
            runValidationTasks("numberOfRooms", value);
          }
          setNumberOfRooms(value);
        }}
        onBlur={() => runValidationTasks("numberOfRooms", numberOfRooms)}
        errorMessage={errors.numberOfRooms?.errorMessage}
        hasError={errors.numberOfRooms?.hasError}
        {...getOverrideProps(overrides, "numberOfRooms")}
      ></TextField>
      <TextField
        label="Floor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={floor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor: value,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.floor ?? value;
          }
          if (errors.floor?.hasError) {
            runValidationTasks("floor", value);
          }
          setFloor(value);
        }}
        onBlur={() => runValidationTasks("floor", floor)}
        errorMessage={errors.floor?.errorMessage}
        hasError={errors.floor?.hasError}
        {...getOverrideProps(overrides, "floor")}
      ></TextField>
      <SwitchField
        label="Has elevator"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasElevator}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator: value,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.hasElevator ?? value;
          }
          if (errors.hasElevator?.hasError) {
            runValidationTasks("hasElevator", value);
          }
          setHasElevator(value);
        }}
        onBlur={() => runValidationTasks("hasElevator", hasElevator)}
        errorMessage={errors.hasElevator?.errorMessage}
        hasError={errors.hasElevator?.hasError}
        {...getOverrideProps(overrides, "hasElevator")}
      ></SwitchField>
      <SwitchField
        label="Has balcony"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasBalcony}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony: value,
              hasParking,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.hasBalcony ?? value;
          }
          if (errors.hasBalcony?.hasError) {
            runValidationTasks("hasBalcony", value);
          }
          setHasBalcony(value);
        }}
        onBlur={() => runValidationTasks("hasBalcony", hasBalcony)}
        errorMessage={errors.hasBalcony?.errorMessage}
        hasError={errors.hasBalcony?.hasError}
        {...getOverrideProps(overrides, "hasBalcony")}
      ></SwitchField>
      <SwitchField
        label="Has parking"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasParking}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking: value,
              hasSaferoom,
              description,
            };
            const result = onChange(modelFields);
            value = result?.hasParking ?? value;
          }
          if (errors.hasParking?.hasError) {
            runValidationTasks("hasParking", value);
          }
          setHasParking(value);
        }}
        onBlur={() => runValidationTasks("hasParking", hasParking)}
        errorMessage={errors.hasParking?.errorMessage}
        hasError={errors.hasParking?.hasError}
        {...getOverrideProps(overrides, "hasParking")}
      ></SwitchField>
      <SwitchField
        label="Has saferoom"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasSaferoom}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.hasSaferoom ?? value;
          }
          if (errors.hasSaferoom?.hasError) {
            runValidationTasks("hasSaferoom", value);
          }
          setHasSaferoom(value);
        }}
        onBlur={() => runValidationTasks("hasSaferoom", hasSaferoom)}
        errorMessage={errors.hasSaferoom?.errorMessage}
        hasError={errors.hasSaferoom?.hasError}
        {...getOverrideProps(overrides, "hasSaferoom")}
      ></SwitchField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              displayName,
              street,
              city,
              zip,
              country,
              type,
              size,
              numberOfRooms,
              floor,
              hasElevator,
              hasBalcony,
              hasParking,
              hasSaferoom,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || propertyModelProp)}
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
              !(idProp || propertyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
