import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BaseRouter from './domRoutes/BaseRouter';

function App() {
  return (
    < >
    <BrowserRouter>
    <Header/>
    <BaseRouter/>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
