import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const LogoStyled = styled(Link)`
  color: ${({ open }) => (open ? "#0183C7" : "#ffffff")};
  margin: 1.5rem 2rem;
  font-size: 2rem;
  text-decoration: none;
  position: relative;
  z-index: 999;
  transition: color 0.2s ease-in-out;
`;
const Logo = ({ isOpen }) => {
  return (
    <LogoStyled open={isOpen} to="/">
      Jamajka
    </LogoStyled>
  );
};

export default Logo;
