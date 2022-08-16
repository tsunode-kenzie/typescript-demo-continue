import api from './api';

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

// :Promise<IPokemonResponse> indica que minha função é uma promise
// e que o retorno dela é uma interface IPokemonResponse
export async function getPokemons(): Promise<IPokemonResponse> {
  // Quando passamos get<IPokemonResponse> significa que o data vai
  // ter o formato IPokemonResponse
  const { data } = await api.get<IPokemonResponse>('/pokemon');

  return data;
}
