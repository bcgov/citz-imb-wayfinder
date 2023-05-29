import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Button, handleClick } from './components/Button/Button';

function App() {
  // function handleClick() {
  //   alert('Hello! IMB is cool');
  // }
  return (
    <div>
      <Header />
      <Button onClick={handleClick()} variant="primary" size="sm" disabled={false} />
      <Button onClick={handleClick()} variant="secondary" size="sm" disabled />
      <Footer />
    </div>
  );
}

export default App;
