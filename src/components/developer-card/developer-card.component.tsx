import { FC, useState } from 'react';

//import assets
import unFaved from '../../assets/img/unFaved.svg';
import faved from '../../assets/img/faved.svg';

import './developer-card.component.css';

const DeveloperCard: FC = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

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
        <img
          src='https://dl6lnggp44pnu.cloudfront.net/service-multimedia/330000626-photo-1118-mini'
          alt='cover page'
        />
      </div>
      <div className='card-mid-image'>
        <img
          src='https://d17meyd56oy0jr.cloudfront.net/seller-logo/330000626'
          alt='avatar'
        />
      </div>

      <div className='card-lower'>
        <div className='card-lower-left'>
          <h4 className='card-dev-name'>Donnienos</h4>
          <p className='card-dev-price'>₦30,000</p>
        </div>
        <div className='card-lower-right'>Hire</div>
      </div>
    </div>
  );
};

export default DeveloperCard;
