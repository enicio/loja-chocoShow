import React, { useContext } from 'react';
import myContext from '../store/myContext';
import '../components/input.css'

const Input = () => {
  const { setInput} = useContext(myContext);

  function delayForSearch(e) {
    setTimeout( () => setInput(e.target.value),500)
  }

  return (
      <input
        type="text"
        className="input"
        placeholder="Busque um produto"
        onChange={(e) => delayForSearch(e)}
      />
  );
};

export default Input;
