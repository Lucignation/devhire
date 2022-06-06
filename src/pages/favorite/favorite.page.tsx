import { FC } from 'react';
import { useSelector } from 'react-redux';

//import from  folders
import DeveloperCard from '../../components/developer-card/developer-card.component';
import { Store } from '../../store/types';

//import CSS styles
import './favorite.page.css';

//import interfaces
import { IDeveloper } from '../../common/interfaces/developers.interface';

const Favorite: FC = () => {
  const data = useSelector((store: Store) => store.resources);

  const { favorites } = data;

  const devFavs =
    favorites &&
    favorites.map((dev: IDeveloper, index: number) => (
      <DeveloperCard developer={dev} key={index} />
    ));

  return (
    <div className='favorite'>
      <h1>Favorites</h1>
      {favorites.length < 1 ? (
        <p>No favorite developer yet</p>
      ) : (
        <div className='favorite-grid'> {devFavs} </div>
      )}
    </div>
  );
};

export default Favorite;
