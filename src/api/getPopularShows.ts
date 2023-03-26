import axios, { AxiosPromise } from 'axios';
import ShowsResponse from '../model/ShowsResponse';

export default function getPopularShows(): AxiosPromise<ShowsResponse> {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  return axios.get(url);
}
