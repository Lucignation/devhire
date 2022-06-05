import { FC, useEffect, useState } from 'react';

import { connect, useSelector } from 'react-redux';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { getCurrencies, setCurrency } from '../../store/action';
import { Store } from '../../store/types';

//import CSS styles
import './currency.component.css';

type props = {
  getCurrencies: () => Array<ICurrency> | any;
  setCurrency: (currency: ICurrency) => void;
};

const Currrency: FC<props> = ({ getCurrencies, setCurrency }) => {
  const data = useSelector((store: Store) => store.resources);

  const [curr, setCurr] = useState<string>('');
  const [cur, setCur] = useState<ICurrency[]>([]);

  const { currencies, currency } = data;

  useEffect(() => {
    const fetch = async () => {
      const res = await getCurrencies();
      setCur(res[0]);
      await setCurrency(res[0]);
    };

    fetch();
  }, []);

  useEffect(() => {
    const currencyCode =
      currencies &&
      currencies.filter((currr: ICurrency) => currr.short === curr);
    setCur(currencyCode);
    setCurrency(currencyCode);
  }, [curr]);

  const options = currencies.map((currency: ICurrency) => {
    return (
      <option key={currency.id} value={currency.short}>
        {currency.name}
      </option>
    );
  });

  //   console.log(currencyCode);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurr(() => e.target.value);
    // await setCurrency(currencyCode);
  };

  console.log(curr);

  console.log(cur);

  return (
    <div className='currency-component'>
      <img
        src={cur.length > 0 ? cur[0].flag_url : currencies[0]?.flag_url}
        alt={currencies[0]?.name}
      />
      <select onChange={handleChange}>{options}</select>
    </div>
  );
};

export default connect(null, { getCurrencies, setCurrency })(Currrency);
