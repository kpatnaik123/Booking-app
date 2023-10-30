import axios from 'axios';
import { sample_foods } from '../data';

export const getAll = async () => {
  const { data } = await axios.get('/api/menu/getmenu');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('/api/menu/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
    const { data } = await axios.get('/api/menu/tags');
    return data;
};



export const getAllByTag = async tag => {
    if (tag === 'All') return getAll();
    const { data } = await axios.get('/api/menu/tag/' + tag);
    return data;
  };

  // export const getById = async foodId => {
  //   const { data } = await axios.get('/api/order/food/' + foodId);
  //   return data;
  // };

  export const getById = async foodId => {
    sample_foods.find(item=>item.id===foodId)
  };
