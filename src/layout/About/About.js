import React, { Component } from "react";
import styled from "styled-components";
import AboutContent from "../../components/AboutContent/AboutContent";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  position: relative;
`;
class About extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <AboutContent aboutText={this.props.aboutText} />
      </Wrapper>
    );
  }
}

export default About;
