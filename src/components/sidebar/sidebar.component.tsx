import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

//imges imports
import Logo from '../../assets/img/logo.svg';
import Search from '../../assets/img/search.svg';
import Fav from '../../assets/img/fav.svg';
import ActiveFav from '../../assets/img/active-heart.svg';
import InActiveSearch from '../../assets/img/inactive-search.svg';

//import CSS styles
import './sidebar.component.css';

const Sidebar: FC = () => {
  const location = useLocation();
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <nav>
        <ul className='nav-link-lists'>
          <li
            className={
              location.pathname === '/'
                ? 'active-nav-link-item nav-link-item'
                : 'nav-link-item'
            }
          >
            <div className={location.pathname === '/' ? 'stripe' : ''}></div>
            <div className='nav-icon'>
              <img
                src={location.pathname === '/' ? Search : InActiveSearch}
                alt='search'
              />
            </div>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li
            className={
              location.pathname === '/favorites'
                ? 'active-nav-link-item nav-link-item'
                : 'nav-link-item'
            }
          >
            <div
              className={location.pathname === '/favorites' ? 'stripe' : ''}
            ></div>
            <div className='nav-icon'>
              <img
                src={location.pathname === '/favorites' ? ActiveFav : Fav}
                alt='favorite'
              />
            </div>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
