import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";
import { Form, FormGroup, Input, FormActions, Button, FormError } from "./Styled";
import { yupResolver } from "@hookform/resolvers/yup";

type AddressFormValues = {
  address: string;
};

interface AddressFormProps {
  data: AddressFormValues;
  onSubmit(values: AddressFormValues): void;
  onBack?(): void;
  validateSchema?: ObjectSchema;
}

export function AddressForm({
  data,
  onSubmit,
  onBack,
  validateSchema,
}: AddressFormProps): ReactElement {
  const { register, handleSubmit, errors } = useForm<AddressFormValues>({
    defaultValues: data,
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: validateSchema && yupResolver(validateSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="address">Last Name</label>
        <Input id="address" name="address" placeholder="address" ref={register} />
        {errors.address?.message && <FormError>{errors.address?.message}</FormError>}
      </FormGroup>

      <FormActions>
        {onBack ? (
          <Button variant="secondary" type="button" onClick={onBack}>
            Prev
          </Button>
        ) : (
          <div />
        )}
        <Button type="submit">Next</Button>
      </FormActions>
    </Form>
  );
}
