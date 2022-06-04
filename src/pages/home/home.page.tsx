import { FC } from 'react';

//import CSS styles
import './home.page.css';

import DeveloperGrid from '../devlopers-grid/devlopers-grid.page';

const Home: FC = () => {
  return (
    <div className='home'>
      <h1>Hire Top Developers</h1>
      <DeveloperGrid />
    </div>
  );
};

export default Home;
