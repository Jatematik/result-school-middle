import React, {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { Form } from '../Form/Form';
// import { Form } from '../Form/Form';
import { TextInput } from '../TextInput/TextInput';

export const Signin: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({
  ...props
}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReset = () => {
    formRef.current?.reset();
    setInputs({
      email: '',
      password: '',
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleReset();
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef} {...props}>
      <TextInput
        type="email"
        label="Email"
        name="email"
        required
        placeholder="Your Email"
        value={inputs.email}
        onChange={handleChange}
      />
      <TextInput
        type="password"
        label="Password"
        name="password"
        required
        placeholder="Your password"
        value={inputs.password}
        onChange={handleChange}
      />
      <Button>Войти</Button>
    </From>
  );
};

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #2737cf;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: sans-serif;
  cursor: pointer;
  &:active {
    background-color: #091799;
  }
`;

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

// interface SigninProps extends FormHTMLAttributes<HTMLFormElement> {

// }
