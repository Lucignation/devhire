import { FC, useEffect, useState } from 'react';

import { connect, useSelector } from 'react-redux';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { getCurrencies, setCurrency } from '../../store/action';
import { Store } from '../../store/types';

//import CSS styles
import './currency.component.css';

type props = {
  getCurrencies: () => void;
  setCurrency: (currency: ICurrency) => void;
};

const Currrency: FC<props> = ({ getCurrencies }) => {
  const data = useSelector((store: Store) => store.resources);

  const { currencies, currency } = data;
  useEffect(() => {
    const fetch = async () => {
      const res = await getCurrencies();
      //   setCurrencies(res[0])
    };

    fetch();
  }, [currency]);

  setCurrency(currencies[0]);

  console.log(currency);

  console.log(currencies);

  return (
    <div className='currency-component'>
      <select>
        <option value='NGN'>
          <div></div>
          Naira
        </option>

        <option value='USD'>
          <div>FLAG</div>
          Dollars
        </option>
      </select>
    </div>
  );
};

export default connect(null, { getCurrencies, setCurrency })(Currrency);
