import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Button from "../Button";
import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1200px) {
    width: auto;
    transform: translate(25%, -25%);
    align-items: flex-end;
  }
`;

const HeaderContnent = () => {
  return (
    <Wrapper>
      <Title />
      <SubTitle />
      <Button>O nas</Button>
    </Wrapper>
  );
};

export default HeaderContnent;
