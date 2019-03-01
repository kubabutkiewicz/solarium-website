import React from "react";
import PriceCard from "./PriceCard";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 80vw;
  margin: 7rem auto 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 3rem;
  @media screen and (min-width: 768px) {
    max-width: 50vw;
  }
  @media screen and (min-width: 1024px) {
    max-width: 80vw;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const PriceList = ({ solariumsInfo }) => {
  return (
    <List>
      {solariumsInfo.map(solarium => (
        <PriceCard solarium={solarium} />
      ))}
    </List>
  );
};

export default PriceList;
