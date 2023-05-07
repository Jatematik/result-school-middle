import React, { InputHTMLAttributes } from 'react';
import styled, { CSSProp } from 'styled-components';

export const TextInput: React.FC<TextInputProps> = ({
  containerStyles = {},
  id,
  label,
  required,
  ...props
}) => {
  return (
    <Container>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <RequiredSpan>*</RequiredSpan>}
        </Label>
      )}
      <Input {...props} $CSS={containerStyles} id={id} />
    </Container>
  );
};

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyles?: CSSProp;
  label?: string;
}

interface InputProps {
  $CSS?: CSSProp;
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-bottom: 4px;
`;

const RequiredSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 3px;
  color: #ca1414;
`;

const Input = styled.input<InputProps>`
  font-family: sans-serif;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    color: #ced4da;
    font-size: 16px;
  }

  &:focus {
    border-color: #228be6;
  }
`;
