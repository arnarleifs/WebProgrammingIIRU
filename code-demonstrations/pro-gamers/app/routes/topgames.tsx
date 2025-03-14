import { GamesList } from "@/components/games-list/games-list";
import type { Route } from "./+types/news";
import { Box, Heading, Text } from "@chakra-ui/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Gamers - About" },
    { name: "description", content: "Pro Gamers - About section" },
  ];
}

export default function TopGames() {
  return (
    <Box display="grid" justifyContent="center">
        <GamesList />
    </Box>
  );
}
