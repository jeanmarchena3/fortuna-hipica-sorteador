import AXIOS from '../src/config/api';

export const initialData = () => AXIOS.get('get_initial_data');
