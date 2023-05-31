import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
