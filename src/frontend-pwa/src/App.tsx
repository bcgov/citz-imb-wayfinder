/**
 * @summary The root component of the application
 * @author Dallas Richmond & Tyler Maloney
 */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Eula from './views/Eula/Eula';
import ViewRouter from './routes/ViewRouter';
import useAppService from './services/app/useAppService';

function App() {
  const [eulaAccepted, setEulaAccepted] = useState(import.meta.env.DEV || false);
  const { state, setLoading } = useAppService();

  useEffect(() => {
    setLoading(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {state.isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          {!eulaAccepted
            ? <Eula setEulaAccepted={setEulaAccepted} />
            : (
              <ViewRouter />
            )}
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
