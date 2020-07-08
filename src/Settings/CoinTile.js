import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function CoinTile({ coinKey, topSection }) {
  const { coinList, addCoin, removeCoin, isInFavorites } = useContext(
    AppContext
  );

  let coin = coinList[coinKey];

  let TileClass = SelectableTile;

  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisabledTile;
  }

  return (
    <TileClass
      onClick={() => (topSection ? removeCoin(coinKey) : addCoin(coinKey))}
    >
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
