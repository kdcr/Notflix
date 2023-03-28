import GenreDTO from './GenreDTO';
import SeasonDTO from './SeasonDTO';

export default interface ShowResponseDTO {
  id: number;
  name: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  seasons: SeasonDTO[];
  genres: GenreDTO[];
}
