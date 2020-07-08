import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function CoinGrid({ topSection }) {
  const { coinList, favorites, filteredCoins } = useContext(AppContext);

  let coinsToDisplay = topSection
    ? favorites
    : filteredCoins
    ? Object.keys(filteredCoins)
    : Object.keys(coinList).slice(0, 100);

  return (
    <CoinGridStyled>
      {coinsToDisplay.map((coinKey, index) => (
        <CoinTile topSection={topSection} key={index} coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
}
