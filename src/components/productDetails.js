import React , { useContext } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../store/myContext';
import Header from './header';
import '../components/header.css'
import '../components/productDetails.css'

function ProductDetails(props) {
  const { store: products } = useContext(myContext);
  const { location:{ state: {productId}}} = props;
  const DetailOfProduct = products.filter((product) => product.ean === productId  );
  const { name,fullname, picture, price,
          store: { name: nameStore, phone,
            location: { address, city,address_number, state}}} = DetailOfProduct[0];

  return(
    <>
     <header className='header'>
      <Header/>
    </header>
    <section className='product'>
      <h1>{name}</h1>
      <h2>{fullname}</h2>
      <h2> R$ {price}</h2>
      <img src={picture} alt={name}/>
      <section className='address'>
        <h2>Disponivel em:</h2>
        <h3>{nameStore}</h3>
        <h4>Telefone: {phone}</h4>
        <h4>Endereço: {address} , {address_number}</h4>
        <h4>Cidade: {city} - {state} </h4>
      </section>
      <Link className='homeButton' to='/'>Retornar a página principla</Link>
    </section>
    </>
  )
}

export default ProductDetails;
