import React, { Component } from "react";
import SectionTitle from "../../components/SectionTitle";
import PriceList from "../../components/PriceList";
import styled from "styled-components";
const PricingStyled = styled.section`
  color: #0183c7;
  padding-bottom: 5rem;
`;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding: 10rem 0;
  }
`;
class Pricing extends Component {
  render() {
    return (
      <PricingStyled id="pricing">
        <Wrapper>
          <SectionTitle title="Cennik" center />
          <PriceList />
        </Wrapper>
      </PricingStyled>
    );
  }
}

export default Pricing;
