import React, { ChangeEvent, FC, FormEvent, useRef } from 'react';
import { ValuesProps } from '../../types';
import { Form } from '../Form/Form';
import { TextInput } from '../TextInput/TextInput';

export const Signup: FC<{ onSubmit: (value: ValuesProps) => void }> = ({
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputsRef = useRef({
    name: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    repeatPassword: '',
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
      name: '',
      username: '',
      email: '',
      gender: '',
      password: '',
      repeatPassword: '',
    };
  };

  const handleSubmit = (event: FormEvent) => {
    console.log(inputsRef.current);

    event.preventDefault();
    onSubmit(inputsRef.current);
    handleReset();
  };

  return (
    <Form onSubmit={handleSubmit} refForm={formRef}>
      <TextInput
        type="text"
        label="Name"
        name="name"
        required
        placeholder="Your Name"
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="Username"
        name="username"
        icon={
          <div
            style={{
              color: '#ced4da',
              fontSize: 16,
            }}
          >
            @
          </div>
        }
        required
        placeholder="Your Username"
        onChange={handleChange}
      />
      <TextInput
        type="email"
        label="Email"
        name="email"
        required
        placeholder="Your Email"
        onChange={handleChange}
      />

      <TextInput
        type="radio"
        label="Gender"
        name="gender"
        onChange={handleChange}
        required
        radioValues={['male', 'female']}
      />

      <TextInput
        type="password"
        label="Password"
        name="password"
        required
        placeholder="Your password"
        onChange={handleChange}
      />
      <TextInput
        type="password"
        label="Repeat password"
        name="repeatPassword"
        required
        placeholder="Repeat password"
        onChange={handleChange}
      />
    </Form>
  );
};
