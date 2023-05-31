/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // the following two lines will be removed during later refinement
  const REACT_APP_API_HOSTNAME = 'localhost';
  const REACT_APP_API_PORT = 3000;
  useEffect(() => {
    //  TODO:This will be removed once we actually use isLoading during API calls, Loading media etc
    const getData = async () => {
      try {
        // TODO: remove hard-coded values, dallas will refine this in a later ticket
        const { data } = await axios.get(`http://${REACT_APP_API_HOSTNAME}:${REACT_APP_API_PORT}/api/locations`);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <ViewRouter />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;
