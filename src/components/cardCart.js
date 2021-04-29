import React from 'react';
import { convertCurrency } from '../service/service'
function CardCart({item}) {
  const { product } = item;
    return(
    <div className="itens" >
      <img src={ product.imageUrl } alt={ product.name }></img>
      <div>
        <h3> { product.name } </h3>
        <h3 className="sellingPrice"> { convertCurrency(product.sellingPrice) }</h3>
        <h3> { convertCurrency(product.price) }</h3>
      </div>
    </div> );
}

export default CardCart;
