import React, { PropsWithChildren, FormEvent, RefObject, FC } from 'react';
import { Button, FormComponent } from './Form.styles';

interface FormProps extends PropsWithChildren {
  refForm: RefObject<HTMLFormElement>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({ refForm, onSubmit, children }) => {
  return (
    <FormComponent ref={refForm} onSubmit={onSubmit}>
      {children}
      <Button type="submit">Войти</Button>
    </FormComponent>
  );
};
