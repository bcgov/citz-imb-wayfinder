/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @summary The root component of the application
 * @author  Dallas Richmond, Tyler Maloney
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { SplashScreen, BannerTip } from './components/utility';
import Eula from './views/Eula/Eula';
import ViewRouter from './routes/ViewRouter';
import useAppService from './services/app/useAppService';
import UpdateOnLoad from './utils/UpdateOnLoad';

function App() {
  const {
    setCurrentLocation,
    setAppData,
    initializeEulaState,
    updateSettings,
    setSuccessfulReports,
    setOnline,
    state,
  } = useAppService();
  const location = useLocation();

  useEffect(() => {
    UpdateOnLoad({
      setCurrentLocation,
      setAppData,
      initializeEulaState,
      updateSettings,
      setSuccessfulReports,
      setOnline,
      state,
    });
  }, [location]);

  return (
    <>
      {state.isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <BannerTip />
          {!state.eulaAccepted
            ? <Eula />
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
