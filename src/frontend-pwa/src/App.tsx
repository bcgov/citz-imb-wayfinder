import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <body style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Footer />
    </body>
  );
}

export default App;
