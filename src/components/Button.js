import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  font-size: 1.5rem;
  border-radius: 3.7rem;
  background-color: #ffffff;
  color: #0183c7;
  padding: 0.5rem 4rem;
`;
const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
