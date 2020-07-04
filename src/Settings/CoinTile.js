import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function ({ coinKey }) {
  const { coinList } = useContext(AppContext);

  let coin = coinList[coinKey];

  const TileClass = SelectableTile;

  return (
    <TileClass>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
