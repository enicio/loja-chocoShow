import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './components/header.css'
import MainPage from './pages';
import ProductDetails from './components/productDetails'

function App() {
  return (
   <BrowserRouter>
    <Route exact path='/'component={MainPage} />
    <Route path='/details'component={ProductDetails} />
   </BrowserRouter>
  );
}

export default App;
