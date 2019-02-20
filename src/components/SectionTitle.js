import React from "react";
import styled from "styled-components";
const SectionTitleStyled = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: ${({ isCentered }) => (isCentered ? "center" : "left")};
  }
`;
const SectionTitle = ({ title, center }) => {
  return <SectionTitleStyled isCentered={center}>{title}</SectionTitleStyled>;
};

export default SectionTitle;
