import axios from 'axios';
import ShowsResponseBody from '../model/ShowsResponse';
import ShowDTO from '../model/ShowDTO';
import { mapShows } from './apiUtils';

export default async function getPopularShows(): Promise<ShowDTO[]> {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  const res = await axios.get<ShowsResponseBody>(url);
  return mapShows(res.data.results);
}
