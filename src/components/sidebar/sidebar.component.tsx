import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';

//import CSS styles
import './sidebar.component.css'

const Sidebar: FC = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
