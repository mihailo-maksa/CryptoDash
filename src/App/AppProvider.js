import React, { useState, createContext } from 'react';

export const AppContext = createContext({
  page: 'dashboard',
});

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');

  const changePage = (page) => setPage(page);

  return (
    <AppContext.Provider value={{ page, changePage }}>
      {children}
    </AppContext.Provider>
  );
};
