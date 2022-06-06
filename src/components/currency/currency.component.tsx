import { FC, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

//import interfaces
import { ICurrency } from '../../common/interfaces/currency.interface';

//import from folders
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

  const { currencies } = data;

  useEffect(() => {
    const fetch = async () => {
      const res = await getCurrencies(); //get request to currency api
      setCur(res[0]);
      await setCurrency(res[0]);
    };

    fetch();

    // eslint-disable-next-line
  }, []);

  //update the currencies as it changes
  useEffect(() => {
    const currencyCode =
      currencies &&
      currencies.filter((currr: ICurrency) => currr.short === curr);
    setCur(currencyCode);
    setCurrency(currencyCode);

    // eslint-disable-next-line
  }, [curr]);

  const options = currencies.map((currency: ICurrency) => {
    return (
      <option key={currency.id} value={currency.short}>
        {currency.name}
      </option>
    );
  });

  return (
    <div className='currency-component'>
      <img
        src={cur.length > 0 ? cur[0].flag_url : currencies[0]?.flag_url}
        alt={currencies[0]?.name}
      />
      <select onChange={(e) => setCurr(e.target.value)}>{options}</select>
    </div>
  );
};

export default connect(null, { getCurrencies, setCurrency })(Currrency);
