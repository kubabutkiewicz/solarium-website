import React, { Component } from "react";
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
    font-family: "Roboto";
    color: #ffffff;
    line-height: 1.5625;
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
          <About aboutText="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker" />
          <Pricing />
          <Contact />
        </main>
      </Layout>
    );
  }
}

export default IndexPage;
