import React from "react";
import styled from "styled-components";
import "./layout.css";
const Wrapper = styled.div`
  font-family: FuturaMD;
`;
const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
