import React, { useContext } from 'react';
import myContext from '../store/myContext';

function AddToCart(product) {
  const { cart, setCart } = useContext(myContext);
  return(
    <button onClick={() => setCart([...cart, product])}>Adicionar ao Carrinho</button>
  );
}

export default AddToCart;