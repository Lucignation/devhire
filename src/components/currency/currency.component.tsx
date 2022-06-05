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

const Currrency: FC<props> = ({ getCurrencies, setCurrency }) => {
  const data = useSelector((store: Store) => store.resources);

  const [curr, setCurr] = useState<string>('');
  const [cur, setCur] = useState<ICurrency[]>();

  const { currencies, currency } = data;

  useEffect(() => {
    const fetch = async () => {
      await getCurrencies();
    };

    fetch();
  }, []);

  const options = currencies.map((currency: ICurrency) => {
    return (
      <option key={currency.id} value={currency.short}>
        {currency.name}
      </option>
    );
  });

  const currencyCode =
    currencies && currencies.filter((cur: ICurrency) => cur.short === curr);

  console.log(currencyCode);

  const handleChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    code: ICurrency[]
  ) => {
    setCurr(e.target.value);
    console.log(code);
    // await setCurrency(currencyCode);
  };

  console.log(curr);

  console.log(cur);

  return (
    <div className='currency-component'>
      <img
        src={
          currencyCode.length > 0
            ? currencyCode[0].flag_url
            : currencies[0]?.flag_url
        }
        alt={currencies[0]?.name}
      />
      <select onChange={(e) => handleChange(e, currencyCode)}>{options}</select>
    </div>
  );
};

export default connect(null, { getCurrencies, setCurrency })(Currrency);
