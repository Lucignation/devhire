import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//imports from folders
import Home from '../../pages/home/home.page';
import Favorite from '../../pages/favorite/favorite.page';
import Sidebar from '../sidebar/sidebar.component';

//import CSS styles
import './app.component.css';

const App: FC = () => {
  return (
    <div className='app'>
      <Router>
        <div className='app_division'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorite />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;