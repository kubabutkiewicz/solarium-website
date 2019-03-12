import React, { Component } from "react";
import "../layout/layout.css";
import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import About from "../layout/About/About";
import Pricing from "../layout/Pricing/Pricing";
import Contact from "../layout/Contact/Contact";
import { createGlobalStyle } from "styled-components";
import { graphql } from "gatsby";
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
    const { data } = this.props;
    return (
      <Layout>
        <GlobalStyle />
        <Header scrollY={this.state.scrollY} />
        <main>
          <About aboutText={data.strapiTekstonas} />
          <Pricing desc={data.allStrapiOpis} />
          <Contact />
        </main>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    strapiTekstonas {
      id
      Text
    }
    allStrapiSolarium {
      edges {
        node {
          id
          title
          describtion
          price
        }
      }
    }
  }
`;
