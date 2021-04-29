import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './components/header.css'
import MainPage from './pages';
import ShoppingCart from './pages/shoppingCart';

function App() {
  return (
   <BrowserRouter>
    <Route exact path='/'component={MainPage} />
    <Route path='/carrinho'component={ShoppingCart} />
   </BrowserRouter>
  );
}

export default App;
