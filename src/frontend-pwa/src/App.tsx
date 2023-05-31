import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  return (
    <div>
      <Header />
      <ViewRouter />
      <Footer />
    </div>
  );
}
export default App;
