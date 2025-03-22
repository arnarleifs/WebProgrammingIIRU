import { useParams } from "react-router";
import type { Route } from "./+types/news";
import { Box } from "@chakra-ui/react";
import { NewsDetailsItem } from "@/components/news-details-item/news-details-item";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pro Gamers - News details" },
    { name: "description", content: "Pro Gamers - News details" },
  ];
}

export default function NewsDetails() {
  const params = useParams();
  const newsItemId = params.newsItemId;

  return (
    <Box display="grid" justifyContent="center">
      <NewsDetailsItem newsItemId={parseInt(newsItemId ?? "")} />
    </Box>
  );
}
