/**
 * @summary Router to different views
 * @param locationData - is an array of locations to be passed to the Location view
 * @type {(locaionData : Array<SingleLocation>)}
 * @author Dallas Richmond
 */
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import Location from '../views/Location/Location';
import BCServices from '../views/BCServices/BCServices';
import Report from '../views/Report/Report';
import Settings from '../views/Settings/Settings';
import SingleLocation from '../Type/SingleLocation';
import AboutContact from '../views/AboutContact/AboutContact';

export type ViewRouterProps = {
  serviceBCLocations: Array<SingleLocation>;
  serviceBCServices: Array<string>;
};

export default function ViewRouter({
  serviceBCLocations,
  serviceBCServices,
}: ViewRouterProps) {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/location" element={<Location locations={serviceBCLocations} />} />
      <Route path="/services" element={<BCServices services={serviceBCServices} locations={serviceBCLocations} />} />
      <Route path="/report" element={<Report />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/about" element={<AboutContact />} />
    </Routes>
  );
}
