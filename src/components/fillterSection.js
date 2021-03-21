import React, { useContext } from 'react';
import myContext from '../store/myContext';
import '../components/filterSection.css'

const FilterSection = () => {
  const { UF, setFilterByUF, setInput } = useContext(myContext);

  function filter({ target }) {
    (target.innerText === 'Reset filtro')
      ? setInput(' ')
      : setFilterByUF(target.innerText);
  }

  return (
    <>
    <aside className="sidenav">
      <h3>Filtro por estados</h3>
        <ul>
          {UF.map( (eachUF) => {
          return <li
            name={ eachUF }
            onClick={(e) => filter(e)}
            key={eachUF}>{eachUF}
            </li>} )}
            <li onClick={(e) => filter(e)}>Reset filtro</li>
        </ul>
    </aside>
    </>
  );
};

export default FilterSection;