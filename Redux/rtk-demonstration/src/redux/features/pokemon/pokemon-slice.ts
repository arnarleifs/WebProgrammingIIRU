import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonListItem } from "../../../types/pokemon-list-item";
import { Pokemon } from "../../../types/pokemon";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemons = createAsyncThunk("get/pokemons", async function () {
  const response = await fetch(`${baseUrl}/pokemon`);
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const json = await response.json();
  return json.results;
});

export const getPokemonByName = createAsyncThunk(
  "get/pokemonByName",
  async function (name: string) {
    const response = await fetch(`${baseUrl}/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const json = await response.json();
    return {
      ...json,
      image: json.sprites["front_default"],
    };
  }
);

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.pokemonsIsLoading = true;
    });

    builder.addCase(getPokemons.rejected, (state, action) => {
      if (action.payload) {
        state.pokemonsError = "Could not retrieve Pokémons";
      }
      state.pokemonsIsLoading = false;
    });

    builder.addCase(
      getPokemons.fulfilled,
      (state, action: PayloadAction<PokemonListItem[]>) => {
        state.pokemonsIsLoading = false;
        state.pokemons = action.payload;
      }
    );

    builder.addCase(getPokemonByName.pending, (state) => {
      state.selectedPokemonIsLoading = true;
    });

    builder.addCase(getPokemonByName.rejected, (state, action) => {
      if (action.payload) {
        state.selectedPokemonError = "Could not retrieve Pokémon";
      }
      state.selectedPokemonIsLoading = false;
    });

    builder.addCase(
      getPokemonByName.fulfilled,
      (state, action: PayloadAction<Pokemon>) => {
        state.selectedPokemonIsLoading = false;
        state.selectedPokemon = action.payload;
      }
    );
  },
});

export default pokemonSlice.reducer;
