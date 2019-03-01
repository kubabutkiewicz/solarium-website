import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const NavigationStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 999;
  background-color: ${({ scrollY }) =>
    scrollY > 600 ? "#0183c7" : "transparent"};
  transition: background-color 0.2s ease-in-out;
  @media screen and (min-width: 1300px) {
    max-width: 100%;
  }
`;

class Navigation extends React.Component {
  state = {
    open: false
  };
  handleOpenMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <NavigationStyled scrollY={this.props.scrollY}>
        <Logo isOpen={open} />
        <Menu isOpen={open} openMenuFn={this.handleOpenMenu} />
      </NavigationStyled>
    );
  }
}

export default Navigation;
