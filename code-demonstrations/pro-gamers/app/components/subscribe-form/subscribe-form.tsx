import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import validator from 'validator';
import { toaster } from "@/components/ui/toaster"
import { getCountries } from "@/services/country-service";

interface FormValueStructure {
  value: string;
  errorText: string;
}

interface SubscribeFormStructure {
  fullName: FormValueStructure;
  emailAddress: FormValueStructure;
  telephone: FormValueStructure;
  country: FormValueStructure;
  region: FormValueStructure;
  city: FormValueStructure;
  address: FormValueStructure;
};

const defaultFormValue: SubscribeFormStructure = {
  fullName: {
    value: '',
    errorText: ''
  },
  emailAddress: {
    value: '',
    errorText: ''
  },
  telephone: {
    value: '',
    errorText: ''
  },
  country: {
    value: '',
    errorText: ''
  },
  region: {
    value: '',
    errorText: ''
  },
  city: {
    value: '',
    errorText: ''
  },
  address: {
    value: '',
    errorText: ''
  }
};

export function SubscribeForm() {
  const [formValues, setFormValues] = useState<SubscribeFormStructure>(defaultFormValue);

  useEffect(() => {
    async function getCountriesFromService() {
      const countries = await getCountries(c => c);
    }

    getCountriesFromService();
  }, []);

  function validate() {
    const errors: Record<string, string> = {}

    if (formValues.fullName.value.length <= 3) {
      errors["fullName"] = "The full name needs to be at least 3 characters.";
    }

    if (!validator.isEmail(formValues.emailAddress.value)) {
      errors["emailAddress"] = "The email address is not correctly formatted.";
    }

    if (!validator.isMobilePhone(formValues.telephone.value)) {
      errors["telephone"] = "The telephone is not correctly formatted.";
    }

    if (formValues.fullName.value.length <= 3) {
      errors["address"] = "The address needs to be at least 3 characters.";
    }

    if (Object.keys(errors).length > 0) {
      const newStructure: any = {};
      
      Object.entries(errors).forEach(([key, value]) => {
        const newError: any = {
          errorText: value,
          value: (formValues as any)[key].value
        };
        newStructure[key] = newError;
      });

      setFormValues({
        ...formValues,
        ...newStructure
      });

      return false;
    }

    return true;
  }

  function onValueUpdate(key: string, value: string) {
    const newFormValue: SubscribeFormStructure = {
      ...formValues,
      [key]: {
        errorText: "",
        value
      }
    };
    setFormValues(newFormValue);
  }

  function onSubmit() {
    if (!validate()) {
      return;
    }

    // TODO: Imitate a network function

    toaster.create({
      title: 'You have successfully subscribed.',
      type: "success",
    });

    setFormValues(defaultFormValue);
  }

  return (
    <Fieldset.Root size="lg" maxW="md" marginTop={10}>
      <Fieldset.Content>
        <Field.Root invalid={formValues.fullName.errorText.length > 0}>
          <Field.Label>Full name</Field.Label>
          <Input name="fullName" type="text" value={formValues.fullName.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
          <Field.ErrorText>{formValues.fullName.errorText}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={formValues.emailAddress.errorText.length > 0}>
          <Field.Label>Email address</Field.Label>
          <Input name="emailAddress" type="email" value={formValues.emailAddress.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
          <Field.ErrorText>{formValues.emailAddress.errorText}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={formValues.telephone.errorText.length > 0}>
          <Field.Label>Telephone</Field.Label>
          <Input name="telephone" type="tel" value={formValues.telephone.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
          <Field.ErrorText>{formValues.telephone.errorText}</Field.ErrorText>
        </Field.Root>

        <Field.Root>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="country" >
              <For each={["United Kingdom", "Canada", "United States"]}>
                {(item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Region</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="region">
              <For each={["United Kingdom", "Canada", "United States"]}>
                {(item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>City</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="city">
              <For each={["United Kingdom", "Canada", "United States"]}>
                {(item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root invalid={formValues.address.errorText.length > 0}>
          <Field.Label>Address</Field.Label>
          <Input name="address" type="tel" value={formValues.address.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
          <Field.ErrorText>{formValues.address.errorText}</Field.ErrorText>
        </Field.Root>
      </Fieldset.Content>

      <Button onClick={onSubmit} type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}