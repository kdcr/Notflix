import MovieDTO from '../model/MovieDTO';
import MovieResponseDTO from '../model/MovieResponseDTO';
import ShowDTO from '../model/ShowDTO';
import ShowResponseDTO from '../model/ShowResponseDTO';

const mapMovie = (data: MovieResponseDTO): MovieDTO => ({
  id: data.id,
  title: data.title,
  imageUrl: data.poster_path,
  voteAverage: data.vote_average,
});

const mapMovies = (data: MovieResponseDTO[]): MovieDTO[] => data.map((item) => mapMovie(item));

const mapShow = (data: ShowResponseDTO): ShowDTO => ({
  id: data.id,
  name: data.name,
  imageUrl: data.poster_path,
  voteAverage: data.vote_average,
});

const mapShows = (data: ShowResponseDTO[]): ShowDTO[] => data.map((item) => mapShow(item));

export { mapMovie, mapMovies, mapShow, mapShows };
