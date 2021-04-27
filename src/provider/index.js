import React, { useState, useEffect } from 'react';
import myContext from '../store/myContext';
import fetchProduts from '../service/service';
import product from '../service/products.json';

function Provider({ children }) {
  const [ input, setInput ] = useState('');
  const [ store, setStore ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ freeShipping, setFreeShipping ] = useState(false);
  // const [ UF , setUF ] = useState([]);
  // const [ filterByUF, setFilterByUF] = useState(store);

  useEffect( () => {
    setStore(product.items);
    // async function fetchData() {
    //   const store = await fetchProduts(input);
    //   const { products } = store;
    //   setStore(products)
    // }
    // fetchData();
  },[input])

  // useEffect(() => {
  //   console.log(cart)
  // },[cart])

  // useEffect( () => {
  //   if (store){
  //     const UF = store.map((product) => product.store.location.state  )
  //     let UFUniqueState = new Set();
  //     UF.forEach((uf) => UFUniqueState.add(uf))
  //     let UFUniqueStateArray = []
  //     for(let item of UFUniqueState) UFUniqueStateArray.push(item)
  //     setUF(UFUniqueStateArray)
  //   }
  // },[store])

  // useEffect( () => {
  //   if (store){
  //     const filtredByUF = store
  //       .filter( (product) => product.store.location.state === filterByUF );
  //     if( filtredByUF.length > 0 ) setStore(filtredByUF);
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[filterByUF]);

  const contextValue = {
    input,
    setInput,
    store,
    setStore,
    cart,
    setCart,
    freeShipping,
    setFreeShipping,
  };

  return (
    <myContext.Provider value={contextValue}>
      {children}
    </myContext.Provider>
  );
}

export default Provider;