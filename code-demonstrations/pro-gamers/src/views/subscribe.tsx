import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { RemoteSelectItem } from "../components/remote-select-item/remote-select-item";
import { useState } from "react";
import {
  getCities,
  getCountries,
  getRegions,
} from "../services/country-service";
import { useToast } from "@chakra-ui/react";
import validator from "validator";

interface FormErrors {
  fullName: boolean;
  telephone: boolean;
  emailAddress: boolean;
  address: boolean;
}

export function Subscribe() {
  const [errors, setErrors] = useState<Partial<FormErrors>>();
  const [fullName, setFullName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const toast = useToast();

  function isValid() {
    const errors: Partial<FormErrors> = {};

    if (fullName === "") {
      errors.fullName = true;
    }

    if (!validator.isEmail(emailAddress)) {
      errors.emailAddress = true;
    }

    if (!validator.isMobilePhone(telephone)) {
      errors.telephone = true;
    }

    if (address === "") {
      errors.address = true;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function onSubmit() {
    if (!isValid()) {
      return;
    }

    // Log the fields to the console
    console.log(
      fullName,
      telephone,
      emailAddress,
      country,
      region,
      city,
      address
    );

    // Clear all fields
    setFullName("");
    setTelephone("");
    setEmailAddress("");
    setCountry("");
    setRegion("");
    setCity("");
    setAddress("");

    toast({
      title: "Successfully subscribed.",
      description: "We've subscribed you to our newsletter.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Box>
      <Heading marginBottom={4}>Subscribe now</Heading>
      <FormControl isInvalid={errors?.fullName}>
        <FormLabel>Full name</FormLabel>
        <Input
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors?.fullName && (
          <FormErrorMessage>Fullname is required</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.telephone}>
        <FormLabel>Telephone</FormLabel>
        <Input
          type="text"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        {errors?.telephone && (
          <FormErrorMessage>Telephone must be a valid number</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.emailAddress}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        {errors?.emailAddress ? (
          <FormErrorMessage>Email address must be valid</FormErrorMessage>
        ) : (
          <FormHelperText>We'll never share your email.</FormHelperText>
        )}
      </FormControl>
      <RemoteSelectItem
        label="Country"
        name="country"
        value={country}
        onSelect={(value: string) => setCountry(value)}
        defaultOption={{
          label: "Choose a country",
          value: "",
        }}
        getOptions={async () =>
          getCountries((c) => ({
            label: c.name,
            value: c.code,
          }))
        }
      />
      <RemoteSelectItem
        label="Region"
        name="region"
        value={region}
        onSelect={(value: string) => setRegion(value)}
        isDisabled={country === ""}
        defaultOption={{
          label: "Choose a region",
          value: "",
        }}
        getOptions={async () =>
          getRegions(country, (c) => ({
            label: c.region,
            value: c.region,
          }))
        }
      />
      <RemoteSelectItem
        label="City"
        name="city"
        value={city}
        onSelect={(value: string) => setCity(value)}
        isDisabled={country === "" || region === ""}
        defaultOption={{
          label: "Choose a city",
          value: "",
        }}
        getOptions={async () =>
          getCities(country, region, (c) => ({
            label: c.city,
            value: c.city,
          }))
        }
      />
      <FormControl isInvalid={errors?.address}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          value={address}
          isDisabled={country === "" || region === "" || city === ""}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors?.address && (
          <FormErrorMessage>Address is required</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
}
