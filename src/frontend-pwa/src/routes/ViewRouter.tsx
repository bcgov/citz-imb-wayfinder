import {
  Routes, Route,
} from 'react-router-dom';

import Home from '../views/Home/Home';
import Location from '../views/Location/Location';
import BCServices from '../views/BCServices/BCServices';
import Report from '../views/Report/Report';
import Settings from '../views/Settings/Settings';
import SingleLocation from '../Type/SingleLocation';

export type ViewRouterProps = {
  locationData: Array<SingleLocation>;
}

export default function ViewRouter({
  locationData,
}: ViewRouterProps) {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/location" element={<Location locations={locationData} />} />
      <Route path="/services" element={<BCServices />} />
      <Route path="/report" element={<Report />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
