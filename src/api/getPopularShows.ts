import axios, { AxiosPromise } from 'axios';
import ShowsResponseBody from '../model/ShowsResponse';

export default function getPopularShows(): AxiosPromise<ShowsResponseBody> {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  return axios.get(url);
}
