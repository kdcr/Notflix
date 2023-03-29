import axios from 'axios';
import MovieDTO from '../model/MovieDTO';
import ShowDTO from '../model/ShowDTO';
import MediaFormat from '../model/enums/MediaFormat';
import { mapMovies, mapShows } from './apiUtils';
import MoviesResponseBody from '../model/MoviesResponse';
import ShowsResponseBody from '../model/ShowsResponse';

export default async function getSimilars(
  id: number,
  format: MediaFormat,
): Promise<MovieDTO[] & ShowDTO[]> {
  const url = `https://api.themoviedb.org/3/${
    format === MediaFormat.Movie ? 'movie' : 'tv'
  }/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
  if (format === MediaFormat.Movie) {
    const res = await axios.get<MoviesResponseBody>(url);
    return mapMovies(res.data.results);
  }
  const res = await axios.get<ShowsResponseBody>(url);
  return mapShows(res.data.results);
}
