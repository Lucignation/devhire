import { FC, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

//import from folders
import DeveloperCard from '../../components/developer-card/developer-card.component';
import { getDevelopers } from '../../store/action';
import { Store } from '../../store/types';
import Spinner from '../../utils/Spinner/Spinner';

import './devlopers-grid.page.css';

type props = {
  getDevelopers: () => void;
};

const DevelopersGrid: FC<props> = ({ getDevelopers }) => {
  const data = useSelector((store: Store) => store.resources);

  useEffect(() => {
    const fetchRequest = async () => {
      await getDevelopers(); //request to fetch all developers
    };

    fetchRequest();

    // eslint-disable-next-line
  }, []);

  const users = data.developers.map((user: any, index: number) => (
    <DeveloperCard developer={user._source} key={index} />
  ));

  return (
    <div className='developer-grid'>
      {data.developers.length < 1 ? <Spinner /> : users}
    </div>
  );
};

export default connect(null, { getDevelopers })(DevelopersGrid);
