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
import AboutContact from '../views/AboutContact/AboutContact';
import Eula from '../views/Eula/Eula';
import OfficeOptionsView from '../views/OfficeOptionsView/OfficeOptionsView';
import LocationInformation from '../views/LocationInformation/LocationInformation';
import NotFound from '../views/NotFound/NotFound';
import ReportHistory from '../views/ReportHistory/ReportHistory';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/eula" Component={Eula} />
      <Route path="/location/:service" Component={Location} />
      <Route path="/services" Component={BCServices} />
      <Route path="/report" Component={Report} />
      <Route path="/settings" Component={Settings} />
      <Route path="/settings/about" Component={AboutContact} />
      <Route path="/location" Component={OfficeOptionsView} />
      <Route path="/location/:service/:locale" Component={LocationInformation} />
      <Route path="/report/history" Component={ReportHistory} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
