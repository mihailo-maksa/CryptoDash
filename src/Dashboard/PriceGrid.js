import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function () {
  const { prices } = useContext(AppContext);

  return (
    <PriceGrid>
      {prices.map((price, index) => (
        <PriceTile key={index + 1000} index={index} price={price} />
      ))}
    </PriceGrid>
  );
}
