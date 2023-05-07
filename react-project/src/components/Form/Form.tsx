import React, { FormHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export const Form: React.FC<FormProps> = React.forwardRef<
  HTMLFormElement,
  FormProps
>(({ children, ...props }, ref) => {
  return (
    <FormComponent ref={ref} {...props}>
      {children}
    </FormComponent>
  );
});

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

const FormComponent = styled.form`
  margin: auto;
  margin-top: 50px;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
