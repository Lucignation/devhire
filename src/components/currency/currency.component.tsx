import { FC } from 'react';

//import CSS styles
import './currency.component.css';

const Currrency: FC = () => {
  return (
    <div className='currency-component'>
      <select>
        <option value='NGN'>
          <div>FLAG</div>
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

export default Currrency;
