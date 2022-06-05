import { FC } from 'react';

type props = {
  priceTag: string;
};

const Price: FC<props> = ({ priceTag }) => {
  return <p className='card-dev-price'>₦{priceTag}</p>;
};

export default Price;
