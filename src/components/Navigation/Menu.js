import React from "react";
import styled from "styled-components";
const HamburgerBtn = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  position: relative;
  margin-right: 4rem;
  z-index: 999;
`;
const Line = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  display: block;
  width: 3rem;
  height: 0.3rem;
  background-color: ${({ open }) => (open ? "#0183C7" : "#ffffff")};
  transform: rotate(${({ open }) => (open ? "-45deg" : 0)});
  transition: transform 0.3s ease-in-out;
  ::before,
  ::after {
    content: "";
    width: 100%;
    height: 0.3rem;
    background-color: ${({ open }) => (open ? "#0183C7" : "#ffffff")};
    position: absolute;
    transition: background-color 0.3s ease-in-out;
  }
  ::before {
    top: -250%;
    left: 0;
    transform: rotate(${({ open }) => (open ? "90deg" : 0)})
      translate(
        ${({ open }) => (open ? "25%" : 0)},
        ${({ open }) => (open ? "50%" : 0)}
      );
    transition: transform 0.3s ease-in-out;
  }
  ::after {
    top: 250%;
    left: 0;
    opacity: ${({ open }) => (open ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
  }
`;
const MenuList = styled.ul`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? 0 : "-100%")});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  transition: all 0.3s ease-in-out;
`;
const MenuItem = styled.li`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;
const MenuLink = styled.a`
  text-decoration: none;
  color: #0183c7;
  font-size: 2rem;
`;
const Menu = ({ isOpen, openMenuFn }) => {
  return (
    <nav>
      <HamburgerBtn onClick={openMenuFn}>
        <Line open={isOpen} />
      </HamburgerBtn>
      <MenuList open={isOpen}>
        <MenuItem>
          <MenuLink href="#about">O nas</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#pricing">Cennik</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact">Kontakt</MenuLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
};

export default Menu;
