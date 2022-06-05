import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//imports from folders
import Home from '../../pages/home/home.page';
import Favorite from '../../pages/favorite/favorite.page';
import Sidebar from '../sidebar/sidebar.component';
import Footer from '../footer/footer.component';

//import CSS styles
import './app.component.css'; //modular styles
import '../../common/styles'; //general styles

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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
