import React from "react";
import AboutText from "./AboutText";
import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 12rem auto;
  color: #0183c7;
  @media screen and (min-width: 1300px) {
    width: 50%;
    margin-left: 5rem;
  }
`;
const AboutContent = ({ aboutText }) => {
  return (
    <Wrapper>
      <AboutText aboutText={aboutText} />
    </Wrapper>
  );
};

export default AboutContent;
