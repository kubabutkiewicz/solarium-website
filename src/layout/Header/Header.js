import React, { Component } from "react";
import background from "../../assets/images/header.jpg";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
const HeaderStyled = styled.header`
  height: 100vh;
  background: center / cover no-repeat url(${background});
  background-attachment: fixed;
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Navigation scrollY={this.props.scrollY} />
        <HeaderContent />
      </HeaderStyled>
    );
  }
}

export default Header;
