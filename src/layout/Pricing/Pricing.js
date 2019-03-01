import React, { Component } from "react";
import SectionTitle from "../../components/SectionTitle";
import PriceList from "../../components/PriceList";
import styled from "styled-components";
const PricingStyled = styled.section`
  color: #0183c7;
`;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding: 10rem 0;
  }
`;
class Pricing extends Component {
  state = {
    solariumsInfo: [
      {
        name: "Kreta",
        price: 1,
        power: "strong"
      },
      {
        name: "Teneryfa",
        price: 1.5,
        power: "mid"
      },
      {
        name: "Majorka",
        price: 0.9,
        power: "week"
      }
    ]
  };
  render() {
    return (
      <PricingStyled id="pricing">
        <Wrapper>
          <SectionTitle title="Cennik" center />
          <PriceList solariumsInfo={this.state.solariumsInfo} />
        </Wrapper>
      </PricingStyled>
    );
  }
}

export default Pricing;
