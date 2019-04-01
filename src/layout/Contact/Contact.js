import React, { Component } from "react";
import styled from "styled-components";
import ContactForm from "../../components/ContactForm";
import background from "../../assets/images/annie-spratt-230183-unsplash.jpg";

const ContactWrapper = styled.section`
  min-height: 75vh;
  margin-top: 3rem;
  position: relative;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
`;
const Title = styled.h2`
  font-size: 3.2rem;
  margin: 0;
  text-align: center;
  color: #0183c7;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 22.5%;
    text-align: left;
    margin: 1em 0 0 5rem;
  }
`;
const Img = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30vw;
    object-fit: cover;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <Title>Kontakt</Title>
        <ContactForm />
        <Img src={background} />
      </ContactWrapper>
    );
  }
}

export default Contact;
