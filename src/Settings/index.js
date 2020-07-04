import React, { useContext } from 'react';
import ConfirmButton from './ConfirmButton';
import { AppContext } from '../App/AppProvider';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function () {
  const { firstVisit } = useContext(AppContext);

  return (
    <Page name='settings'>
      {firstVisit && (
        <div>
          <h1 style={{ fontWeight: 'lighter' }}>Welcome to CryptoDash!</h1>
          <h3 style={{ fontWeight: 'lighter' }}>
            Please select your favorite coins to begin.
          </h3>
        </div>
      )}
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
