
import React, { useState, useEffect } from 'react';
import myContext from '../store/myContext';
import fetchProduts from '../service/service';

function Provider({ children }) {
  const [ input, setInput ] = useState('');
  const [ store, setStore ] = useState([]);
  const [ UF , setUF ] = useState([]);
  const [ filterByUF, setFilterByUF] = useState(store);

  useEffect( () => {
    async function fetchData() {
      const store = await fetchProduts(input);
      const { products } = store;
      setStore(products)
    }
    fetchData();
  },[input])

  useEffect( () => {
    if (store){
      const UF = store.map((product) => product.store.location.state  )
      let UFUniqueState = new Set();
      UF.forEach((uf) => UFUniqueState.add(uf))
      let UFUniqueStateArray = []
      for(let item of UFUniqueState) UFUniqueStateArray.push(item)
      setUF(UFUniqueStateArray)
    }
  },[store])

  useEffect( () => {
    if (store){
      const filtredByUF = store.filter( (product) => product.store.location.state === filterByUF );
      console.log(store)
      console.log(filtredByUF)
      if( filtredByUF.length > 0 ) { setStore(filtredByUF)}
    }
  },[filterByUF]);

  const contextValue = {
    input,
    setInput,
    store,
    setStore,
    UF,
    setFilterByUF,
    filterByUF,
  };

  return (
    <myContext.Provider value={contextValue}>
      {children}
    </myContext.Provider>
  );
}

export default Provider;