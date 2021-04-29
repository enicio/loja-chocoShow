import React, { useState, useEffect } from 'react';
import myContext from '../store/myContext';
import { fetchProduts } from '../service/service';
// import product from '../service/products.json';g

function Provider({ children }) {
  const [ input, setInput ] = useState('');
  const [ store, setStore ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ freeShipping, setFreeShipping ] = useState(false);

  useEffect( () => {
    // setStore(product.items);
    async function fetchData() {
      const store = await fetchProduts(input);
      const { items } = store;
      setStore(items)
    }
    fetchData();
  },[input])

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