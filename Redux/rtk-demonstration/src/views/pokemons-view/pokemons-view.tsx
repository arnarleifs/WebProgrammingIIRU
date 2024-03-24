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
import { useGetPokemonsQuery } from "../../services/pokemon-service";

export function PokemonsView() {
  const navigate = useNavigate();

  const { data: pokemons, isLoading, isError, error } = useGetPokemonsQuery();

  return (
    <Box>
      {isLoading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : isError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed to load Pokémons</AlertTitle>
          <AlertDescription>
            {"error" in error ? error.error : ""}
          </AlertDescription>
        </Alert>
      ) : (
        <List spacing={3}>
          {pokemons?.map((p) => (
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
