import React, { ReactElement } from "react";
import { Button, FormActions, Resume, ResumeItem } from "./Styled";

type Contact = {
  lastName: string;
  firstName: string;
  address: string;
};

interface ResumeFormProps {
  data: Contact;
  onSubmit(): void;
  onBack?(): void;
}

export function ResumeForm({ data, onSubmit, onBack }: ResumeFormProps): ReactElement {
  return (
    <Resume>
      <div>
        <ResumeItem>
          <span>Last Name</span>
          <span>{data.lastName}</span>
        </ResumeItem>
        <ResumeItem>
          <span>First Name</span>
          <span>{data.firstName}</span>
        </ResumeItem>
        <ResumeItem>
          <span>Address</span>
          <span>{data.address}</span>
        </ResumeItem>
      </div>

      <FormActions>
        {onBack ? (
          <Button variant="secondary" type="button" onClick={onBack}>
            Prev
          </Button>
        ) : (
          <div />
        )}
        <Button type="button" onClick={() => onSubmit()}>
          Create
        </Button>
      </FormActions>
    </Resume>
  );
}
