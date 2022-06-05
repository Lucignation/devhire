import { FC } from 'react';

//import from folders
import Currency from '../currency/currency.component';

//import CSS styles
import './footer.component.css';

const Footer: FC = () => {
  const date = new Date();

  return (
    <footer className='footer'>
      <p>&copy; {date.getFullYear()} DevHire</p>
      <div className='currency'>
        <Currency />
      </div>
    </footer>
  );
};

export default Footer;
