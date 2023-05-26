import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Home from '../views/Home/Home';
import Location from '../views/Location/Location';

export default function ViewRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/location" Component={Location} />
      </Routes>
    </Router>
  );
}
