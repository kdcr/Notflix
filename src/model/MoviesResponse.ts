import MovieResponseDTO from './MovieResponseDTO';

export default interface MoviesResponse {
  page: number;
  results: MovieResponseDTO[];
}
