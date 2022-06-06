import { FC } from 'react';

import { useSelector } from 'react-redux';
import { Store } from '../../store/types';

type props = {
  priceTag: string;
};

const Price: FC<props> = ({ priceTag }) => {
  const data = useSelector((store: Store) => store.resources);

  const { currency } = data;

  //currency conversion
  const currencyConversion =
    parseFloat(priceTag) / parseFloat(currency[0]?.divider);

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
