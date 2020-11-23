import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";
import { Input, FormGroup, Form, Button, FormActions, FormError } from "./Styled";
import { yupResolver } from "@hookform/resolvers/yup";

type NameFormValues = {
  lastName: string;
  firstName: string;
};

interface NameFormProps {
  data: NameFormValues;
  onSubmit(values: NameFormValues): void;
  validateSchema?: ObjectSchema;
}

export function NameForm({ data, onSubmit, validateSchema }: NameFormProps): ReactElement {
  const { register, handleSubmit, errors } = useForm<NameFormValues>({
    defaultValues: data,
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: validateSchema && yupResolver(validateSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="lastName">Last Name</label>
        <Input id="lastName" name="lastName" placeholder="Doe" ref={register} />
        {errors.lastName?.message && <FormError>{errors.lastName?.message}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="firstName">First Name</label>

        <Input id="firstName" name="firstName" placeholder="John" ref={register} />
        {errors.firstName?.message && <FormError>{errors.firstName?.message}</FormError>}
      </FormGroup>

      <FormActions>
        <div />
        <Button type="submit">Next</Button>
      </FormActions>
    </Form>
  );
}
