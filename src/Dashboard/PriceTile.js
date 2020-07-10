import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { AppContext } from '../App/AppProvider';

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

const numberFormat = (number) => +(number + '').slice(0, 7);

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      justify-items: right;
    `}

  ${(props) =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
`;

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
}

function PriceTile({ sym, data, currentFavorite }) {
  const { setCurrentFavorite } = useContext(AppContext);

  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={() => setCurrentFavorite(sym)}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({ sym, data, currentFavorite }) {
  const { setCurrentFavorite } = useContext(AppContext);

  return (
    <PriceTileStyled
      compact
      currentFavorite={currentFavorite}
      onClick={() => setCurrentFavorite(sym)}
    >
      <CoinHeaderGridStyled>
        <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <div>${numberFormat(data.PRICE)}</div>
    </PriceTileStyled>
  );
}

export default function ({ price, index }) {
  const { currentFavorite } = useContext(AppContext);

  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <TileClass
      sym={sym}
      data={data}
      currentFavorite={currentFavorite === sym}
    ></TileClass>
  );
}
