import React , { useContext } from 'react';
import myContext from '../store/myContext';
import '../components/cards.css'
import AddToCart from './addToCart';
import { convertCurrency } from '../service/service'

function Card() {
  const { store } = useContext(myContext);

  if( store === undefined) return <h1>Nenhum produto encontrado</h1>;

  return(
    <section className="general">
      {store.map(( product) =>
        <section key={product.id} className="cards">
          <h4>{product.name}</h4>
          <img src={product.imageUrl} alt={ product.name }/>
          <div className="price" >
            <p>
              <b>A partir de:</b>
              <span className="value">{convertCurrency(product.price)}</span>
            </p>
            <AddToCart product={product} />
          </div>
        </section>
      )}
    </section>
  )
};

export default Card;
