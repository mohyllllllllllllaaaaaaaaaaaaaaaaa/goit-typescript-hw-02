import axios from 'axios';

const API_KEY = 'bpA9fAlIYjJ0wt1NKBcIv8MZGc98l3Z3aEyyo9WXAsQ';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const getPhotos = async (query, page = 1, ) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 16,
      client_id: API_KEY,
      orientation: 'landscape',
     
    },
  
  });
  return data;
};