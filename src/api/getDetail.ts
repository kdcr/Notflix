import axios from 'axios';
import MovieDTO from '../model/MovieDTO';
import ShowDTO from '../model/ShowDTO';
import MediaFormat from '../model/enums/MediaFormat';
import MovieResponseDTO from '../model/MovieResponseDTO';
import { mapMovie, mapShow } from './apiUtils';
import ShowResponseDTO from '../model/ShowResponseDTO';

export default async function getDetail(
  id: number,
  format: MediaFormat,
): Promise<MovieDTO & ShowDTO> {
  const url = `https://api.themoviedb.org/3/${
    format === MediaFormat.Movie ? 'movie' : 'tv'
  }/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
  if (format === MediaFormat.Movie) {
    const res = await axios.get<MovieResponseDTO>(url);
    return mapMovie(res.data);
  }
  const res = await axios.get<ShowResponseDTO>(url);
  return mapShow(res.data);
}
