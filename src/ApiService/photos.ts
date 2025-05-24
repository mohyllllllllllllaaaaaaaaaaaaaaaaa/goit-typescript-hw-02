import axios from 'axios';

const API_KEY = 'bpA9fAlIYjJ0wt1NKBcIv8MZGc98l3Z3aEyyo9WXAsQ';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export interface UnsplashPhoto {
 id: string;
  urls: {
   small: string;
    regular: string;
 };
  alt_description: string;
}
 interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}
export const getPhotos = async (query: string, page: number = 1): Promise<UnsplashResponse> => {
  try {
    const { data } = await axios.get<UnsplashResponse>(BASE_URL, {
      params: {
        query,
        page,
        per_page: 16,
        client_id: API_KEY,
        orientation: 'landscape',
      },
    });
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

