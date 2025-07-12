import { useQuery } from '@tanstack/react-query';
import { fetchMovies, type MovieApiResponse } from '../services/movieService';

interface UseMoviesQueryProps {
  query: string;
  page: number;
}

export const useMoviesQuery = ({ query, page }: UseMoviesQueryProps) => {
  return useQuery<MovieApiResponse, Error>({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};

