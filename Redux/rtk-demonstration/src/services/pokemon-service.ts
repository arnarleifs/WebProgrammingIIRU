import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListItem } from "../types/pokemon-list-item";
import { Pokemon } from "../types/pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
      transformResponse: (response: any) => ({
        ...response,
        image: response.sprites["front_default"],
      }),
    }),
    getPokemons: builder.query<PokemonListItem[], void>({
      query: () => "pokemon",
      transformResponse: (response: any) => response.results,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
