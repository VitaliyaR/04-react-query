import axios from 'axios';
import type { Movie } from '../types/movie';


export interface MovieApiResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MovieApiResponse> => {
  const url = 'https://api.themoviedb.org/3/search/movie';
  const token = import.meta.env.VITE_TMDB_TOKEN;

  if (!token) {
    throw new Error('TMDB token is missing in environment variables.');
  }

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

