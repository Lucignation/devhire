import { FC, useState, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { Store } from '../../store/types';

type props = {
  priceTag: string;
};

const Price: FC<props> = ({ priceTag }) => {
  const data = useSelector((store: Store) => store.resources);

  const { currency } = data;

  useCallback(() => {
    console.log(currency);
  }, [currency]);

  console.log(currency);

  const currencyConversion =
    parseFloat(priceTag) / parseFloat(currency[0]?.divider);

  console.log(currencyConversion);

  return (
    <p className='card-dev-price'>
      {currency[0] === undefined ? currency.symbol : currency[0]?.symbol}
      {currency[0] === undefined
        ? priceTag
        : currencyConversion.toFixed(2).toLocaleString()}
    </p>
  );
};

export default Price;
