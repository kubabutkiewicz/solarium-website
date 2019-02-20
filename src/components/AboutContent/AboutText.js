import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
const AboutTextStyled = styled.p`
  font-size: 1.4rem;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;
const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    width: 80vw;
  }
`;
const AboutText = () => {
  return (
    <Wrapper>
      <SectionTitle title="O nas" />
      <AboutTextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eos minima magnam recusandae earum, ad labore sequi ratione totam itaque
        laborum corrupti, voluptates assumenda fuga eligendi excepturi aperiam.
        Voluptates, ipsam.
      </AboutTextStyled>
    </Wrapper>
  );
};

export default AboutText;
