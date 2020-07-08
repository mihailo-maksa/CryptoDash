import React, { useContext } from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';
import * as _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  color: #1163c9;
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  const coinSymbols = Object.keys(coinList);
  const coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
  const allStringsToSearch = [...coinSymbols, ...coinNames];

  const fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string);

  const filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
    const coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symbolKey) || _.includes(fuzzyResults, coinName)
    );
  });

  setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;

  if (!inputValue) {
    setFilteredCoins(null);
  }

  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function Search() {
  const { setFilteredCoins, coinList } = useContext(AppContext);

  return (
    <SearchGrid>
      <h2>Search All Coins</h2>
      <SearchInput
        type='text'
        placeholder='Search...'
        onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
      />
    </SearchGrid>
  );
}
