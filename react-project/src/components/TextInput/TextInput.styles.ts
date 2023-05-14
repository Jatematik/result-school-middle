import { InputHTMLAttributes, ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $CSS?: CSSProp;
  icon?: ReactNode;
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

  ${({ type }) => type === 'radio' && 'width: auto'}
  ${({ icon }) => icon && 'padding-left: 40px'}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-left: 10px;
  font-size: 18px;
  color: rgb(0, 0, 0);
`;

const WithIcon = styled.div`
  position: relative;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 40px;
`;

export {
  Container,
  Label,
  RequiredSpan,
  Input,
  Wrapper,
  RadioLabel,
  WithIcon,
  IconContainer,
};
