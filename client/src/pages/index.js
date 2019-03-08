import React, { Component } from "react";
import "../layout/layout.css";
import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import About from "../layout/About/About";
import Pricing from "../layout/Pricing/Pricing";
import Contact from "../layout/Contact/Contact";
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

class IndexPage extends Component {
  state = {
    scrollY: 0
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      scrollY: window.scrollY
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY
    });
  };
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Header scrollY={this.state.scrollY} />
        <main>
          <About />
          <Pricing />
          <Contact />
        </main>
      </Layout>
    );
  }
}

export default IndexPage;
