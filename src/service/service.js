const URL = 'https://www.obrazul.com.br/api/recruitment/products?search=';

export const fetchProduts = (search) => {
  return fetch(URL+`${search}`).then((results) => results.json().then((data) => data))
};

export default fetchProduts;