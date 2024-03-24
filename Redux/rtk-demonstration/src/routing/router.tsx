import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomeView } from "../views/home-view/home-view";
import { PokemonsView } from "../views/pokemons-view/pokemons-view";
import { PokemonDetailsView } from "../views/pokemon-details-view/pokemon-details-view";
import { MainLayout } from "../layouts/main-layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<HomeView />} />
      <Route path="pokemons" element={<PokemonsView />} />
      <Route path="pokemons/:pokemonName" element={<PokemonDetailsView />} />
    </Route>
  )
);
