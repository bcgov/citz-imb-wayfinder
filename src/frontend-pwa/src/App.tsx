import './App.css';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import ServiceLocation from './views/ServiceLocation/ServiceLocation';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/location" Component={ServiceLocation} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
