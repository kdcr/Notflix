import ShowResponseDTO from './ShowResponseDTO';

export default interface ShowsResponseBody {
  page: number;
  results: ShowResponseDTO[];
}
