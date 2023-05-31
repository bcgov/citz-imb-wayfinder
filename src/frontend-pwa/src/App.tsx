import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const REACT_APP_API_HOSTNAME = 'localhost';
  const REACT_APP_API_PORT = 3000;
  useEffect(() => {
    //  This will be removed once we actually use isLoading during API calls, Loading media etc.
    // const test = async () => axios.get(`http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`)
    //   .then((response) => {
    //     console.log(response.data);
    //   }, (error) => {
    //     console.log(error);
    //   });
    const getData = async () => {
      try {
        // const NODE_ENV = process.env.NODE_ENV;
        // const response = await axios.get(`http://${NODE_ENV.API_HOSTNAME}:${NODE_ENV.API_PORT}/api`);

        const { data } = await axios.get(`http://${REACT_APP_API_HOSTNAME}:${REACT_APP_API_PORT}/api/locations`);

        console.log('Response: ', data);
      } catch (error) {
        console.log('Error: ', error);
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
