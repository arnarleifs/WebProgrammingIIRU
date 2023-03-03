import { Snackbar, Box, Button, FormControl, TextField } from "@mui/material";
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
  const fullNameRef = useRef(null);
  const telephoneRef = useRef(null);
  const emailRef = useRef(null);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const isValid = () => {
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const telephone = telephoneRef.current.value;
    const errors = {};

    if (fullName === "") {
      errors.fullName = "Full name is required.";
    }
    if (!validator.isEmail(email)) {
      errors.email = "Email is not properly formatted.";
    }
    if (!validator.isMobilePhone(telephone)) {
      errors.telephone = "Telephone is not correct.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    console.log(
      fullNameRef.current.value,
      telephoneRef.current.value,
      emailRef.current.value,
      country,
      region,
      city
    );
    setSubmitted(true);

    // Reset the fields
    fullNameRef.current.value = "";
    telephoneRef.current.value = "";
    emailRef.current.value = "";

    setCountry("");
    setRegion("");
    setCity("");
  };

  return (
    <>
      <h1>Subscribe now!</h1>
      <form data-testid="form" onSubmit={onSubmit}>
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
              id="telephone"
              label="Telephone"
              variant="standard"
              inputRef={telephoneRef}
              error={Boolean(errors.telephone)}
              helperText={errors.telephone}
            />
          </FormControl>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <FormControl fullWidth>
            <TextField
              id="email"
              label="Email address"
              variant="standard"
              inputRef={emailRef}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </FormControl>
        </Box>
        <RemoteSelectItem
          label="Country"
          value={country}
          name="country"
          onSelect={(value) => setCountry(value)}
          defaultOption="--- No country is selected ---"
          getOptions={async () =>
            await getCountries((c) => ({
              label: c.name,
              value: c.code,
            }))
          }
        />

        <RemoteSelectItem
          label="Region"
          value={region}
          name="region"
          onSelect={(value) => setRegion(value)}
          defaultOption="--- No region is selected ---"
          isDisabled={country === ""}
          getOptions={async () =>
            await getRegions(country, (c) => ({
              label: c.region,
              value: c.region,
            }))
          }
        />
        <RemoteSelectItem
          label="City"
          value={city}
          name="city"
          onSelect={(value) => setCity(value)}
          defaultOption="--- No city is selected ---"
          isDisabled={country === "" || region === ""}
          getOptions={async () =>
            await getCities(country, region, (c) => ({
              label: c.city,
              value: c.city,
            }))
          }
        />
        <Button variant="contained" type="submit">
          Subscribe
        </Button>
      </form>
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={() => setSubmitted(false)}
        message="Successfully subscribed!"
      />
    </>
  );
};
