import React, { Component } from "react";
import image from "../../assets/images/About.jpg";
import styled from "styled-components";
import AboutContent from "../../components/AboutContent/AboutContent";
const ImgWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    background-image: url(${image});
    background-size: cover;
    background-position: center bottom;
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    margin: 2rem 2rem 2rem 0;
  }
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
`;
class About extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <AboutContent />
        <ImgWrapper />
      </Wrapper>
    );
  }
}

export default About;
