import { Box, Button, FormControl, Snackbar, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { RemoteSelectItem } from "../../components/RemoteSelectItem/RemoteSelectItem";
import {
  getCities,
  getCountries,
  getRegions,
} from "../../services/countryService";
import validator from "validator";

export const Subscribe = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Uncontrolled components
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const telephoneRef = useRef(null);
  const addressRef = useRef(null);

  // Controlled components
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const isValid = () => {
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const telephone = telephoneRef.current.value;
    const address = addressRef.current.value;

    const errors = {};

    if (fullName === "") {
      errors.fullName = "Full name is required.";
    }
    if (!validator.isEmail(email)) {
      errors.email = "Email is not properly formatted.";
    }
    if (!validator.isMobilePhone(telephone)) {
      errors.telephone = "Telephone is not properly formatted.";
    }
    if (address === "") {
      errors.address = "Address is required.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    setSubmitted(true);

    console.log(fullNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(telephoneRef.current.value);
    console.log(addressRef.current.value);

    console.log(country);
    console.log(region);
    console.log(city);

    // Reset the form
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    telephoneRef.current.value = "";
    addressRef.current.value = "";

    setCountry("");
    setRegion("");
    setCity("");
  };

  return (
    <>
      <h1>Subscribe now!</h1>
      <form onSubmit={onSubmit} data-testid="form">
        <Box marginTop={2} marginBottom={2}>
          <FormControl fullWidth>
            <TextField
              autoFocus
              id="full-name"
              label="Full name"
              variant="standard"
              inputRef={fullNameRef}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
          </FormControl>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <FormControl fullWidth>
            <TextField
              autoFocus
              id="email"
              label="Email address"
              variant="standard"
              inputRef={emailRef}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </FormControl>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <FormControl fullWidth>
            <TextField
              autoFocus
              id="telephone"
              label="Telephone"
              variant="standard"
              inputRef={telephoneRef}
              error={Boolean(errors.telephone)}
              helperText={errors.telephone}
            />
          </FormControl>
        </Box>
        <RemoteSelectItem
          label="Country"
          value={country}
          name="country"
          onSelect={setCountry}
          getOptions={async () =>
            getCountries((c) => ({
              label: c.name,
              value: c.code,
            }))
          }
        />
        <RemoteSelectItem
          label="Region"
          value={region}
          name="region"
          onSelect={setRegion}
          getOptions={async () =>
            getRegions(country, (c) => ({
              label: c.region,
              value: c.region,
            }))
          }
          isDisabled={country === ""}
        />
        <RemoteSelectItem
          label="City"
          value={city}
          name="city"
          onSelect={setCity}
          getOptions={async () =>
            getCities(country, region, (c) => ({
              label: c.city,
              value: c.city,
            }))
          }
          isDisabled={country === "" || region === ""}
        />
        <Box marginTop={2} marginBottom={2}>
          <FormControl fullWidth>
            <TextField
              autoFocus
              id="address"
              label="Address"
              variant="standard"
              inputRef={addressRef}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />
          </FormControl>
        </Box>
        <Button variant="contained" type="submit">
          Subscribe
        </Button>
      </form>
      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        message="Successfully subscribed!"
      />
    </>
  );
};
