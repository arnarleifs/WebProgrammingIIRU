import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getPokemons } from "../../redux/features/pokemon/pokemon-slice";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  List,
  ListIcon,
  ListItem,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

export function PokemonsView() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { pokemons, pokemonsIsLoading, pokemonsError } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <Box>
      {pokemonsIsLoading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : pokemonsError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed to load Pokémons</AlertTitle>
          <AlertDescription>{pokemonsError}</AlertDescription>
        </Alert>
      ) : (
        <List spacing={3}>
          {pokemons.map((p) => (
            <ListItem
              key={p.name}
              onClick={() => navigate(`/pokemons/${p.name}`)}
            >
              <ListIcon as={SunIcon} color="yellow.500" />
              {_.capitalize(p.name)}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
