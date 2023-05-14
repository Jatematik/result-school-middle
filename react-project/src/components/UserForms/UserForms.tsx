import React, { useState } from 'react';
import { ValuesProps } from '../../types';
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Signup';

export const UserForms: React.FC = () => {
  const [values, setValues] = useState<ValuesProps | undefined>();

  const onSubmit = (value: ValuesProps) => {
    setValues(value);
  };
  console.log(values);

  return (
    <>
      {values ? <Signin onSubmit={onSubmit} /> : <Signup onSubmit={onSubmit} />}
    </>
  );
};
