import {
  Routes, Route,
} from 'react-router-dom';

import Home from '../views/Home/Home';
import Location from '../views/Location/Location';
import BCServices from '../views/BCServices/BCServices';
import Report from '../views/Report/Report';
import Settings from '../views/Settings/Settings';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/location" Component={Location} />
      <Route path="/services" Component={BCServices} />
      <Route path="/report" Component={Report} />
      <Route path="/settings" Component={Settings} />
    </Routes>
  );
}
