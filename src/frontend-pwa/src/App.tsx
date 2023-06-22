/**
 * @summary The root component of the application
 * @author Dallas Richmond & Tyler Maloney
 */
/* eslint-disable no-console */
import { Header, Footer } from './components/common';
import SplashScreen from './components/utility/SplashScreen/SplashScreen';
import Eula from './views/Eula/Eula';
import ViewRouter from './routes/ViewRouter';
import useAppService from './services/app/useAppService';

function App() {
  const { state } = useAppService();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {state.isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
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
