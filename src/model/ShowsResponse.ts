import ShowResponseDTO from './ShowResponseDTO';

export default interface ShowsResponse {
  page: number;
  results: ShowResponseDTO[];
}
