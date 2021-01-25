import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Routes from './routes';
import Menu from './Components/Menu/Menu'
import Carrinho from './Components/Carrinho/Carrinho'
import './App.css';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <Menu />
          <Carrinho />

          <Routes />
          <Footer />
        </Container>
      </BrowserRouter>
      </Provider>
    );
}

export default App;