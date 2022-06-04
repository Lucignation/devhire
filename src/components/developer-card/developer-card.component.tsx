import { FC, useState } from 'react';

//import assets
import unFaved from '../../assets/img/unFaved.svg';
import faved from '../../assets/img/faved.svg';

import './developer-card.component.css';
import { IDeveloper } from '../../common/interfaces/developers.interface';

type props = {
  developer: IDeveloper;
};

const DeveloperCard: FC<props> = ({ developer }) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const { display_name, currency_name, avatar, service_photo, starting_from } =
    developer;

  console.log(developer);

  const handleFav = () => {
    setIsFav(!isFav);
  };
  return (
    <div className='card'>
      <div className='card-top'>
        <div
          className={isFav ? 'faved-icon fav-icon' : 'unfaved-icon fav-icon'}
          onClick={() => handleFav()}
        >
          {isFav ? (
            <img src={faved} alt='fav icon' />
          ) : (
            <img src={unFaved} alt='fav icon' />
          )}
        </div>
        <img src={service_photo} alt='cover page' />
      </div>
      <div className='card-mid-image'>
        <img src={avatar} alt='avatar' />
      </div>

      <div className='card-lower'>
        <div className='card-lower-left'>
          <h4 className='card-dev-name'>{display_name}</h4>
          <p className='card-dev-price'>₦{starting_from}</p>
        </div>
        <div className='card-lower-right'>Hire</div>
      </div>
    </div>
  );
};

export default DeveloperCard;
