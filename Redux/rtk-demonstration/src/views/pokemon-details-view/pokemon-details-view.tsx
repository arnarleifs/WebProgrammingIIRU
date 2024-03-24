import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { getPokemonByName } from "../../redux/features/pokemon/pokemon-slice";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
  Image,
} from "@chakra-ui/react";
import _ from "lodash";

export function PokemonDetailsView() {
  const { pokemonName } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPokemon, selectedPokemonIsLoading, selectedPokemonError } =
    useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonByName(pokemonName ?? ""));
  }, [dispatch, pokemonName]);

  return selectedPokemonIsLoading ? (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  ) : selectedPokemonError ? (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Failed to load Pokémon</AlertTitle>
      <AlertDescription>{selectedPokemonError}</AlertDescription>
    </Alert>
  ) : (
    <Card>
      <CardHeader>
        <Heading size="md">{_.capitalize(selectedPokemon?.name)}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Image
            src={selectedPokemon?.image}
            alt={`Image of ${selectedPokemon?.name}`}
            height={200}
            width={200}
          />
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Height
            </Heading>
            <Text pt="2" fontSize="sm">
              {selectedPokemon?.height}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Weight
            </Heading>
            <Text pt="2" fontSize="sm">
              {selectedPokemon?.weight}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
