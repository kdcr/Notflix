import GenreDTO from './GenreDTO';

export default interface MovieResponseDTO {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  genres: GenreDTO[];
}
