import React, { Component } from "react";
import styled from "styled-components";
import ContactForm from "../../components/ContactForm";
import background from "../../assets/images/form-big.jpg";

const ContactWrapper = styled.section`
  min-height: 70vh;
  padding: 5rem;
  margin-top: 3rem;
  background: url(${background}) no-repeat fixed bottom;
  background-size: cover;
  position: relative;
`;
const Title = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  margin: 0;
`;
class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <Title>Kontakt</Title>
        <ContactForm />
      </ContactWrapper>
    );
  }
}

export default Contact;
