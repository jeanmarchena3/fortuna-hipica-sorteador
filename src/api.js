import AXIOS from '../src/config/api';

export const initialData = () => AXIOS.get('get_initial_data');

export const getSorteos = data => AXIOS.get('get-sorteos', {
  params: data
});

export const insertarResultadosTriples = data => AXIOS.post('insertar-triples', data);
