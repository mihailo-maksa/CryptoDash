import React, { useState, createContext, useEffect } from 'react';
import * as cc from 'cryptocompare';

cc.setApiKey(
  'fda33fce694ef4383d249c2b440261a7432734eebd931479f03a9819679f7e20'
);

const getSavedSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDashData'));
  if (!cryptoDashData) {
    return {
      page: 'settings',
      firstVisit: true,
    };
  }

  return {};
};

let initialState = {
  page: 'dashboard',
  firstVisit: false,
  ...getSavedSettings(),
  changePage: () => {},
  confirmFavorites: () => {},
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');
  const [favorites, setFavorites] = useState([]);
  const [coinList, setCoinList] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      let coins = await cc.coinList();
      let coinData = coins.Data;

      setCoinList(coinData);
    };

    fetchCoins();
  }, []);

  const changePage = (page) => setPage(page);
  const confirmFavorites = (favorites) => {
    initialState.firstVisit = false;

    setPage('dashboard');

    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'test',
      })
    );

    setFavorites(favorites);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        changePage,
        firstVisit: initialState.firstVisit,
        favorites,
        confirmFavorites,
        coinList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
