import GenreDTO from './GenreDTO';

export default interface MovieDTO {
  id: number;
  title?: string;
  voteAverage: number;
  imageUrl: string;
  overview: string;
  genres: GenreDTO[];
}
