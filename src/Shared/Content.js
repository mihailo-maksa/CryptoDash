import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => {
  const { coinList } = useContext(AppContext);

  if (!coinList) {
    return <div>Loading Coins...</div>;
  }

  return <div>{children}</div>;
};

export default Content;
