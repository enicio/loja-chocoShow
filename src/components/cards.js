import React , { useContext } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../store/myContext';
import '../components/cards.css'

function Card() {
  const { store, input } = useContext(myContext);

  if( store === undefined) return <h1>Nenhum produto encontrado</h1>;

  return(
    <>
    {(input)?<h2 className="searchResult"> Resultado da busca por {input}</h2>: ''}
    <section className="general">
    {store.map(( product) =>
      <section key={product.ean} className="cards">
        <h4>{product.fullname}</h4>
        <img src={product.picture} alt={ product.name }/>
        <div >
          <p>
            <b>A partir de:</b>
            <span className="value">R$ {product.price}</span>
          </p>
         <Link className="purchase-btn" to={{pathname:'/details', state:{productId: product.ean} }}>VER PRODUTO</Link>
        </div>
      </section>
     )}
    </section>
    </>
  )
};

export default Card;
