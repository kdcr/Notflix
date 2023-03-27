import MovieResponseDTO from './MovieResponseDTO';

export default interface MoviesResponseBody {
  page: number;
  results: MovieResponseDTO[];
}
