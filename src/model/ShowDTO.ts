import GenreDTO from './GenreDTO';
import SeasonDTO from './SeasonDTO';

export default interface ShowDTO {
  id: number;
  name?: string;
  voteAverage: number;
  imageUrl: string;
  overview: string;
  seasons?: SeasonDTO[];
  genres: GenreDTO[];
}
