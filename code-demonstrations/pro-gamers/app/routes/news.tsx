import { NewsList } from "@/components/news-list/news-list";
import type { Route } from "./+types/news";
import { Box } from "@chakra-ui/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Gamers - News" },
    { name: "description", content: "Pro Gamers - News section" },
  ];
}

export default function News() {
  return (
    <Box display="grid" justifyContent="center">
      <NewsList />
    </Box>
  );
}
