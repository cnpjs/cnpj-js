import fetch from 'cross-fetch';

const cnpj = async (value, { signal } = {}) => {
  const response = await fetch(`https://api.cnpjs.dev/v1/${value}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    signal,
  });

  if (!response.ok) {
    throw new Error(`api.cnpjs.dev error; status=${response.status}`);
  }

  return response.json();
};

export default cnpj;
