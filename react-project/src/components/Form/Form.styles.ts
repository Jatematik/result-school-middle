import styled from 'styled-components';

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

export { FormComponent, Button };
