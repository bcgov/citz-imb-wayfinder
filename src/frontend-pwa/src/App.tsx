import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewRouter from './routes/ViewRouter';
import SearchBar from './components/SearchBar/SearchBar';

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
