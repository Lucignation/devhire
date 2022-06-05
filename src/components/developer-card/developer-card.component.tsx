import { FC, useState } from 'react';
import { useSelector, connect } from 'react-redux';

//import assets
import unFaved from '../../assets/img/unFaved.svg';
import faved from '../../assets/img/faved.svg';

import './developer-card.component.css';

import { IDeveloper } from '../../common/interfaces/developers.interface';
import { Store } from '../../store/types';
import { removeFav, FavDev } from '../../store/action';

import Price from '../price/price.component';

type props = {
  developer: IDeveloper;
  removeFav: (dev: IDeveloper) => void;
  FavDev: (dev: IDeveloper) => void;
};

const DeveloperCard: FC<props> = ({ developer, removeFav, FavDev }) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const { display_name, currency_name, avatar, service_photo, starting_from } =
    developer;

  const data = useSelector((store: Store) => store.resources);

  const { favorites } = data;

  //   console.log(favorites);

  //fav a developer
  const handleFav = (developer: IDeveloper) => {
    setIsFav(!isFav);
    if (
      favorites.some((dev: IDeveloper) => dev.cust_id === developer.cust_id)
    ) {
      removeFav(developer);
      //   showToast(`${developer.display_name} is removed`);
    } else {
      FavDev(developer);
      //   showToast(`${developer.display_name} is faved`);
    }
  };

  return (
    <div className='card'>
      <div className='card-top'>
        <div
          className={
            favorites.some(
              (dev: IDeveloper) => dev.cust_id === developer.cust_id
            )
              ? 'faved-icon fav-icon'
              : 'unfaved-icon fav-icon'
          }
          onClick={() => handleFav(developer)}
        >
          {favorites.some(
            (dev: IDeveloper) => dev.cust_id === developer.cust_id
          ) ? (
            <img src={faved} alt='fav icon' />
          ) : (
            <img src={unFaved} alt='fav icon' />
          )}
        </div>
        <div className='card-mid-cover'>
          <img src={service_photo} alt='cover page' className='cover' />
        </div>
      </div>
      <div className='card-mid-image'>
        <img src={avatar} alt='avatar' />
      </div>

      <div className='card-lower'>
        <div className='card-lower-left'>
          <h4 className='card-dev-name'>{display_name}</h4>
          <Price priceTag={starting_from} />
        </div>
        <div className='card-lower-right'>Hire</div>
      </div>
    </div>
  );
};

export default connect(null, { removeFav, FavDev })(DeveloperCard);
