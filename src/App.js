import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import BaseRouter from './domRoutes/BaseRouter';
import store from  "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <Layout>
        <BrowserRouter>
          <Header/>
          <BaseRouter/>
          <Footer/>
        </BrowserRouter>
        </Layout>
    </Provider>
  );
}

export default App;
