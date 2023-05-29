import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Button } from './components/Button/Button';

function App() {
  function handleClick() {
    console.log('Hello! IMB is cool');
  }
  return (
    <div>
      <Header />
      <Button handleClick={() => handleClick()} variant="primary" size="sm" disabled={false} />
      <Footer />
    </div>
  );
}
export default App;
