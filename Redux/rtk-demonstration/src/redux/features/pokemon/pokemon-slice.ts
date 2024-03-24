import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonListItem } from "../../../types/pokemon-list-item";
import { Pokemon } from "../../../types/pokemon";
import { AppDispatch } from "../../store";

const baseUrl = "https://pokeapi.co/api/v2";

export function getPokemons() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(getPokemonsLoading());
      const response = await fetch(`${baseUrl}/pokemon`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const json = await response.json();
      dispatch(getPokemonsSuccess(json.results));
    } catch (err: any) {
      dispatch(getPokemonsError(err.message));
    }
  };
}

export function getPokemonByName(name: string) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(getSelectedPokemonLoading());
      const response = await fetch(`${baseUrl}/pokemon/${name}`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const json = await response.json();
      dispatch(
        getSelectedPokemonSuccess({
          ...json,
          image: json.sprites["front_default"],
        })
      );
    } catch (err: any) {
      dispatch(getSelectedPokemonError(err.message));
    }
  };
}

interface PokemonSliceState {
  pokemons: PokemonListItem[];
  pokemonsIsLoading: boolean;
  pokemonsError?: string | undefined;
  selectedPokemon?: Pokemon | undefined;
  selectedPokemonIsLoading: boolean;
  selectedPokemonError?: string | undefined;
}

const initialState: PokemonSliceState = {
  pokemons: [],
  pokemonsIsLoading: false,
  selectedPokemonIsLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemonsSuccess: (state, action: PayloadAction<PokemonListItem[]>) => {
      state.pokemonsIsLoading = false;
      state.pokemonsError = undefined;
      state.pokemons = action.payload;
    },
    getPokemonsLoading: (state) => {
      state.pokemonsIsLoading = true;
    },
    getPokemonsError: (state, action: PayloadAction<string>) => {
      state.pokemonsIsLoading = false;
      state.pokemonsError = action.payload;
    },
    getSelectedPokemonSuccess: (state, action: PayloadAction<Pokemon>) => {
      state.selectedPokemonIsLoading = false;
      state.selectedPokemonError = undefined;
      state.selectedPokemon = action.payload;
    },
    getSelectedPokemonLoading: (state) => {
      state.selectedPokemonIsLoading = true;
    },
    getSelectedPokemonError: (state, action: PayloadAction<string>) => {
      state.selectedPokemonIsLoading = false;
      state.selectedPokemonError = action.payload;
    },
  },
});

const {
  getPokemonsSuccess,
  getPokemonsLoading,
  getPokemonsError,
  getSelectedPokemonSuccess,
  getSelectedPokemonLoading,
  getSelectedPokemonError,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
