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
  // you have set the following value to true for testing
  const [eulaAccepted, setEulaAccepted] = useState(true);
  const [locationData, setLocationData] = useState<LocationsArray>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${constants.BACKEND_URL}/api/locations`);
        setLocationData(data.locations);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    //  TODO:This will be removed once we actually use isLoading during API calls, Loading media etc
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
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
            : <ViewRouter locationData={locationData} />}
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
