import React, { ChangeEvent, FC, FormEvent, useRef } from 'react';
import { ValuesProps } from '../../types';
import { Form } from '../Form/Form';
import { TextInput } from '../TextInput/TextInput';

export const Signin: FC<{ onSubmit: (value: ValuesProps) => void }> = ({
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputsRef = useRef({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputsRef.current = {
      ...inputsRef.current,
      [event.target.name]: event.target.value,
    };
  };

  const handleReset = () => {
    formRef.current?.reset();
    inputsRef.current = {
      email: '',
      password: '',
    };
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(inputsRef.current);
    handleReset();
  };

  return (
    <Form onSubmit={handleSubmit} refForm={formRef}>
      <TextInput
        type="email"
        label="Email"
        name="email"
        required
        placeholder="Your Email"
        onChange={handleChange}
      />
      <TextInput
        type="password"
        label="Password"
        name="password"
        required
        placeholder="Your password"
        onChange={handleChange}
      />
    </Form>
  );
};
