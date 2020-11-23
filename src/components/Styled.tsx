import styled, { createGlobalStyle } from "styled-components";
import "typeface-fira-code";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 16px;
    min-height: 100vh;
    color: #2d3436;
    font-family: Fira Code, Helvetica, sans-serif;
  }
`;

export const Pre = styled.pre`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em;
  margin: 0;
  background-color: #dfe6e9;
  max-height: 150px;
  overflow-y: auto;
`;

export const Funnel = styled.div`
  padding: 1em;
  min-height: 100vh;
`;

export const TextButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  border: 0;
  margin: 0;
  padding: 0.375em 0.5em;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;

  min-width: 4em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  :hover {
    color: #636e72;
  }
`;

export const Stepper = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div {
    min-width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  span {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  span.current {
    color: #6c5ce7;
    font-weight: bold;
    transform: scale(1.4);
  }
`;

const buttonVariants = {
  primary: {
    background: "#0984e3",
    color: "white",
  },
  secondary: {
    background: "#dfe6e9",
    color: "#2d3436",
  },
};

export const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  {
    padding: "0.675em 1em",
    border: "0",
    lineHeight: "1",
    borderRadius: "3px",
  },
  ({ variant = "primary" }) => buttonVariants[variant],
);

export const Input = styled.input`
  border: 1px solid #f1f1f4;
  background: #f1f2f7;
  padding: 0.5em 0.75em;
  border-radius: 3px;
  outline: 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.25em;

  > label {
    margin-bottom: 0.25em;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 300px;

  > div {
    margin: 0.675em auto;
    width: 100%;
    max-width: 300px;
  }
`;

export const FormError = styled.span`
  font-size: 0.875em;
  color: #d63031;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Resume = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 300px;

  > div {
    margin: 0.675em auto;
    width: 100%;
    max-width: 300px;
  }
`;

export const ResumeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;

  span:first-of-type {
    font-weight: bold;
  }
`;
