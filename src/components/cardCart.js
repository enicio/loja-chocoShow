import React, { useContext } from 'react';
import { convertCurrency } from '../service/service'
import MyContext from '../store/myContext';
function CardCart({item}) {

  const { cart, setCart } = useContext(MyContext)

  function removeItem(productID) {
    const newCart = cart.filter((item) => item.product.id !== productID );
    setCart(newCart)
  }

  const { product } = item;
    return(
    <div className="itens" >
      <img src={ product.imageUrl } alt={ product.name }></img>
      <div className="itens-information">
          <h3> { product.name } </h3>
          <h3 className="sellingPrice"> { convertCurrency(product.sellingPrice) }</h3>
          <h3> { convertCurrency(product.price) }</h3>
      </div>
        <button className="delete-button" onClick={() => removeItem(product.id )}>X</button>
    </div> );
}

export default CardCart;
