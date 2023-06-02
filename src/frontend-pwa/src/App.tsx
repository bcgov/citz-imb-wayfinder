/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';
import LocationsArray from './Type/LocationsArray';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [locationData, setLocationData] = useState<LocationsArray>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_HOSTNAME}/api/locations`);
        setLocationData(data.locations);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    //  TODO:This will be removed once we actually use isLoading during API calls, Loading media etc
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <ViewRouter locationData={locationData} />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;
