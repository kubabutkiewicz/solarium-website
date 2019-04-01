import React from "react";
import styled from "styled-components";
const ListItem = styled.li`
  border: solid 3px #0183c7;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  min-height: 33.3vh;
`;
const Tile = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;
const Describtion = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0 1.6rem;
`;
const Price = styled.h4`
  font-size: 1.8rem;
  margin: 0;
`;
const PriceCard = () => {
  return (
    <ListItem>
      <Tile>Lorem</Tile>
      <Describtion>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.</Describtion>
      <Price>1 zl/min</Price>
    </ListItem>
  );
};

export default PriceCard;
