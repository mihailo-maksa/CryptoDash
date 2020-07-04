import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const Page = ({ children, name }) => {
  const { page } = useContext(AppContext);

  if (page !== name) {
    return null;
  }

  return <div>{children}</div>;
};

export default Page;
