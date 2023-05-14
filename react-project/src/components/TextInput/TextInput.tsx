import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { CSSProp } from 'styled-components';
import {
  Container,
  Input,
  Label,
  RequiredSpan,
  Wrapper,
  RadioLabel,
  WithIcon,
  IconContainer,
} from './TextInput.styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyles?: CSSProp;
  label?: string;
  radioValues?: string[];
  icon?: ReactNode;
}

export const TextInput: FC<TextInputProps> = ({
  containerStyles = {},
  id,
  label,
  required = false,
  radioValues,
  icon,
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
      {radioValues ? (
        radioValues.map((item) => (
          <Wrapper key={item}>
            <Input
              $CSS={containerStyles}
              id={item}
              value={item}
              required={required}
              {...props}
            />
            <RadioLabel htmlFor={item}>{item}</RadioLabel>
          </Wrapper>
        ))
      ) : icon ? (
        <WithIcon>
          <IconContainer>{icon}</IconContainer>
          <Input
            $CSS={containerStyles}
            icon={icon}
            id={id}
            required={required}
            {...props}
          />
        </WithIcon>
      ) : (
        <Input $CSS={containerStyles} id={id} required={required} {...props} />
      )}
    </Container>
  );
};
