/* eslint-disable no-console */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Eula from './views/Eula/Eula';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //  TODO:This will be removed once we actually use isLoading during API calls, Loading media etc
    const getData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_HOSTNAME}/api/locations`);
        console.log(data);
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
          <Eula />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;
