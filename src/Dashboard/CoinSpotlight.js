import React, { useContext } from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import styled from 'styled-components';

const SpotlightName = styled.h2`
  text-align: center;
`;

export default function () {
  const { currentFavorite, coinList } = useContext(AppContext);

  return (
    <Tile>
      <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
      <CoinImage spotlight coin={coinList[currentFavorite]} />
    </Tile>
  );
}
