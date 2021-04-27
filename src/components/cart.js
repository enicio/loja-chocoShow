import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import cartImage from '../images/cart.svg'
import MyContext from '../store/myContext';
import '../components/cart.css'

function Cart() {
  const { cart } = useContext(MyContext)
  return(
      <div className="cart-image-container">
          { (cart.length > 0) &&  <span className="number-of-itens-on-cart" >{ cart.length}</span>}
        <Link to="/carrinho">
            <img className="cart-image" src={cartImage} alt="Carrinho de compras"/>
        </Link>
    </div>
  );
}

export default Cart;