import React from "react";
import styled from "styled-components";
const FormWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 40%;
    top: 60%;
    left: 25%;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 30%;
    top: 60%;
    left: 19%;
  }
`;
const FormStyled = styled.form`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.input`
  font-family: "Roboto";
  border: 0;
  padding: 1rem;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;
  border-radius: 3rem;
  border: 1px solid #0183c7;
  color: hsl(201, 20%, 10%);
  box-shadow: 0px 4px 39px -6px rgba(1, 131, 199, 0);
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  ::placeholder {
    font-family: "Roboto";
    color: #0183c7;
  }
  :focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 4px 39px -6px rgba(1, 131, 199, 1);
  }
`;
const FormControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;
const TextAreaStyled = styled.textarea`
  min-height: 10rem;
  padding: 1rem;
  border-radius: 1rem;
  font-family: "Roboto";
  border: 1px solid #0183c7;
  color: hsl(201, 20%, 10%);
  box-shadow: 0px 4px 39px -6px rgba(1, 131, 199, 0);
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  ::placeholder {
    color: #0183c7;
  }
  :focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 4px 39px -6px rgba(1, 131, 199, 1);
  }
`;
const SubmitStyled = styled.input`
  width: 50%;
  background-color: #ffffff;
  border: 0;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 1px solid #0183c7;
  font-family: inherit;
  color: #0183c7;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #0183c7;
    color: #ffffff;
  }
  :focus {
    outline: none;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
const ContactForm = () => {
  return (
    <FormWrapper>
      <FormStyled
        method="POST"
        action="https://formspree.io/jakub.butkiewicz94@gmail.com"
      >
        <FormControlStyled>
          <InputStyled
            type="email"
            name="email"
            id="email"
            placeholder="Podaj email"
          />
        </FormControlStyled>
        <FormControlStyled>
          <InputStyled
            type="text"
            name="imie"
            id="imie"
            placeholder="Podaj swoje imie"
          />
        </FormControlStyled>
        <FormControlStyled>
          <TextAreaStyled
            name="message"
            placeholder="Podaj date, godzine oraz nazwe łozka które chcesz zarezerwować"
          />
        </FormControlStyled>
        <SubmitStyled type="submit" value="Wyslij" />
      </FormStyled>
    </FormWrapper>
  );
};

export default ContactForm;
