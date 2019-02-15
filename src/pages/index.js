import React from "react";
import "../layout/layout.css";
import Header from "../layout/Header/Header";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: "FuturaMD";
    color: #ffffff;
  }
  *, *::after, *::body {
    box-sizing: border-box;
  }
`;
const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default IndexPage;
