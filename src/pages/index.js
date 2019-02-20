import React from "react";
import "../layout/layout.css";
import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import About from "../layout/About/About";
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
  <Layout>
    <GlobalStyle />
    <Header />
    <main>
      <About />
    </main>
  </Layout>
);

export default IndexPage;
