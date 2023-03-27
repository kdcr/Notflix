import axios from 'axios';
import MovieDTO from '../model/MovieDTO';
import MoviesResponseBody from '../model/MoviesResponse';
import { mapMovies } from './apiUtils';

export default async function getPopularMovies(): Promise<MovieDTO[]> {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  const res = await axios.get<MoviesResponseBody>(url);
  return mapMovies(res.data.results);
}
