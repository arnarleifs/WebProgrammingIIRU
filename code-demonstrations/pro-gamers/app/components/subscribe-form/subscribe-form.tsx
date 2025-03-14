import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"
import { useState } from "react";

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

  function validate() {

  }

  function onValueUpdate(key: string, value: string) {

  }

  function onSubmit() {
    // TODO: Validate

    // TODO: Imitate a network function

    // TODO: Display successful toaster

    // TODO: Clear the form
  }

  return (
    <Fieldset.Root size="lg" maxW="md" marginTop={10}>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Full name</Field.Label>
          <Input name="fullName" type="text" value={formValues.fullName.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="emailAddress" type="email" value={formValues.emailAddress.value} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Telephone</Field.Label>
          <Input name="telephone" type="tel" value={telephone} onChange={e => onValueUpdate(e.target.name, e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="country">
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

        <Field.Root>
          <Field.Label>Address</Field.Label>
          <Input name="address" type="tel" value={address} onChange={e => setAddress(e.target.value)} />
        </Field.Root>
      </Fieldset.Content>

      <Button onClick={onSubmit} type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}