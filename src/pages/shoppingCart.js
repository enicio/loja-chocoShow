import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import CardCart from '../components/cardCart';
import MyContext from '../store/myContext';
import { convertCurrency } from '../service/service';
import '../pages/shoppingCart.css';
import goBackImage from '../images/left-arrow.svg';

function ShoppingCart() {
  const { cart, freeShipping, setFreeShipping } = useContext(MyContext);
  const [ sumPrice, setSumPrice ] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item ) => {
      setSumPrice(sum += item.product.price )
    })
       if (Number(sum) > 1000) {
      setFreeShipping(true)
    } else {
      setFreeShipping(false)
    };
   },[cart, setFreeShipping])

  return(
    <section className="container-general">
      <section className="container-cart">
        <div className="header-cart">
          <Link to="/"> <img src={ goBackImage } alt="voltar para pagina peincipal"/> </Link>
          <header>Meu Carrinho</header>
        </div>
        <div className="products-on-cart" >
          { (cart.length > 0)
              ?cart.map((item) =>
                <CardCart
                  className="items"
                  key={item.product.uniqueId}
                  item={ item } /> )
              :<h1 className="empty-cart">Ainda não há produtos no carrinho</h1>}
        </div>
        <div className="total-price-information">
          <div className="total-price">
            <span>Total </span>
            <span>{convertCurrency(sumPrice)}</span>
          </div>
              { (freeShipping && <h1
                  className="free-shipping"> Parabéns, sua compra tem frete grátis ! </h1>)
              }
        </div>
      </section>
      <div className="button-finish">
        <button>Finalizar Compra</button>
      </div>
    </section>
  );
}

export default ShoppingCart;