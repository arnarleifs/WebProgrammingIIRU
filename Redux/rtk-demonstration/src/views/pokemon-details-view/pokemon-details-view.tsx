import { useParams } from "react-router-dom";
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
import { useGetPokemonByNameQuery } from "../../services/pokemon-service";

export function PokemonDetailsView() {
  const { pokemonName } = useParams();

  const {
    data: selectedPokemon,
    isLoading,
    isError,
    error,
  } = useGetPokemonByNameQuery(pokemonName as string);

  return isLoading ? (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  ) : isError ? (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Failed to load Pokémon</AlertTitle>
      <AlertDescription>{"error" in error ? error.error : ""}</AlertDescription>
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
