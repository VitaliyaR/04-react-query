import axios from 'axios';
import type { Movie } from '../types/movie';

export interface MovieApiResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieApiResponse> => {
  const url = 'https://api.themoviedb.org/3/search/movie';
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MovieApiResponse>(url, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

