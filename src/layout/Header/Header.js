import React, { Component } from "react";
import background from "../../assets/images/header.jpg";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
const HeaderStyled = styled.header`
  height: 100vh;
  background: center / cover no-repeat url(${background});
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
    );
  }
}

export default Header;
