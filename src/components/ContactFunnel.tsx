import React, { ReactElement, useEffect, useState } from "react";
import { AddressForm } from "./AddressForm";
import { DebugForm } from "./DebugForm";
import { NameForm } from "./NameForm";
import { ResumeForm } from "./ResumeForm";
import { Stepper, TextButton } from "./Styled";
import * as yup from "yup";

const contactNameSchema = yup
  .object({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
  })
  .defined();

const contactAddressSchema = yup
  .object({
    address: yup.string().required(),
  })
  .defined();

const contactSchema = yup.object({}).concat(contactNameSchema).concat(contactAddressSchema);

const defaultContact = {
  lastName: "",
  firstName: "",
  address: "",
};

type Contact = {
  lastName: string;
  firstName: string;
  address: string;
};

export function ContactFunnel(): ReactElement {
  const [contact, setContact] = useState({ ...defaultContact });
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  function onChange(values: Partial<Contact>): void {
    setContact({ ...contact, ...values });
    setStep(step + 1);
  }

  function onPrev(): void {
    if (step - 1 < 0) return;
    setStep(step - 1);
  }

  function onCreate() {
    console.info("create new contact with : ", contact);
    setContact({ ...defaultContact });
    setStep(0);
  }

  return (
    <div>
      <Stepper>
        <div>
          <TextButton onClick={() => setStep(0)}>
            <span className={step === 0 ? "current" : ""}>name</span>
          </TextButton>
          <TextButton role="button" onClick={() => setStep(1)}>
            <span className={step === 1 ? "current" : ""}>address</span>
          </TextButton>{" "}
          <TextButton onClick={() => setStep(2)}>
            <span className={step === 2 ? "current" : ""}>resume</span>
          </TextButton>
        </div>
      </Stepper>

      <div>
        {step === 0 && (
          <NameForm data={contact} onSubmit={onChange} validateSchema={contactNameSchema} />
        )}
        {step === 1 && (
          <AddressForm
            data={contact}
            onSubmit={onChange}
            onBack={onPrev}
            validateSchema={contactAddressSchema}
          />
        )}
        {step === 2 && <ResumeForm data={contact} onSubmit={onCreate} onBack={onPrev} />}
      </div>
      <DebugForm data={contact} isValid={contactSchema.isValidSync(contact)} />
    </div>
  );
}
