/**
 * @summary The root component of the application
 * @author Dallas Richmond
 * @author Tyler Maloney
 */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Eula from './views/Eula/Eula';
import ViewRouter from './routes/ViewRouter';
import LocationsArray from './Type/LocationsArray';
import constants from './constants/Constants';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [eulaAccepted, setEulaAccepted] = useState(import.meta.env.DEV || false);
  const [serviceBCLocations, setServiceBCLocations] = useState<LocationsArray>([]);
  const [serviceBCServices, setServiceBCServices] = useState<Array<string>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${constants.BACKEND_URL}/api/locations`);
        setServiceBCLocations(data.serviceBCLocations);
        setServiceBCServices(data.serviceBCServices);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    // TODO: Load in initial data in useEffect, will handle setIsLoading as well.
    // will be handled in ticket this sprint, specifically [WAYF-101]
    setIsLoading(false);
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          {!eulaAccepted
            ? <Eula setEulaAccepted={setEulaAccepted} />
            : (
              <ViewRouter
                serviceBCLocations={serviceBCLocations}
                serviceBCServices={serviceBCServices}
              />
            )}
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
