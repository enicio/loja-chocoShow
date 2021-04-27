const URL = 'https://www.obrazul.com.br/api/recruitment/products?search=';

export const fetchProduts = async (search) => {
  const results = await fetch(URL + `${search}`);
  const data = await results.json();
  return data;
};

export const convertCurrency = price => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/100)
}


// export default fetchProduts;