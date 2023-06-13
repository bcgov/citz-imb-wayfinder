/**
 * @summary Router to different views
 * @author Dallas Richmond
 */
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import Location from '../views/Location/Location';
import BCServices from '../views/BCServices/BCServices';
import Report from '../views/Report/Report';
import Settings from '../views/Settings/Settings';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/location" element={<Location />} />
      <Route path="/services" element={<BCServices />} />
      <Route path="/report" element={<Report />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/about" element={<AboutContact />} />
    </Routes>
  );
}
