import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function CoinGrid() {
  const { coinList } = useContext(AppContext);

  return (
    <CoinGridStyled>
      {Object.keys(coinList)
        .slice(0, 100)
        .map((coinKey, index) => (
          <CoinTile key={index} coinKey={coinKey} />
        ))}
    </CoinGridStyled>
  );
}
