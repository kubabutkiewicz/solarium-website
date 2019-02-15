import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <NavigationStyled>
        <Logo isOpen={open} />
        <Menu isOpen={open} openMenuFn={this.handleOpenMenu} />
      </NavigationStyled>
    );
  }
}

export default Navigation;
