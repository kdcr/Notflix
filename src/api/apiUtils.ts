import MovieDTO from '../model/MovieDTO';
import MovieResponseDTO from '../model/MovieResponseDTO';
import ShowDTO from '../model/ShowDTO';
import ShowResponseDTO from '../model/ShowResponseDTO';

const mapMovie = (data: MovieResponseDTO): MovieDTO => ({
  id: data.id,
  title: data.title,
  imageUrl: data.poster_path,
  voteAverage: data.vote_average,
  overview: data.overview,
  genres: data.genres,
});

const mapMovies = (data: MovieResponseDTO[]): MovieDTO[] => data.map((item) => mapMovie(item));

const mapShow = (data: ShowResponseDTO): ShowDTO => ({
  id: data.id,
  name: data.name,
  imageUrl: data.poster_path,
  voteAverage: data.vote_average,
  seasons: data.seasons,
  genres: data.genres,
  overview: data.overview,
});

const mapShows = (data: ShowResponseDTO[]): ShowDTO[] => data.map((item) => mapShow(item));

const getImageUrl = (imageUrl: string) => `${import.meta.env.VITE_IMAGE_BASE_URL}${imageUrl}`;

export { mapMovie, mapMovies, mapShow, mapShows, getImageUrl };
