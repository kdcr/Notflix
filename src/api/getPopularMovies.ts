import axios, { AxiosPromise } from 'axios';
import MoviesResponse from '../model/MoviesResponse';

export default function getPopularMovies(): AxiosPromise<MoviesResponse> {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  return axios.get(url);
}
