import React from "react";
import styled from "styled-components";
const SubtitleStyled = styled.p`
  font-size: 1.7rem;
  text-align: center;
  margin: 0 0 2rem 0;
  padding: 0 2rem;
  @media screen and (min-width: 1200px) {
    padding-right: 0;
  }
`;
const SubTitle = () => {
  return <SubtitleStyled>Twoje słonce o kazdej porze roku</SubtitleStyled>;
};

export default SubTitle;
