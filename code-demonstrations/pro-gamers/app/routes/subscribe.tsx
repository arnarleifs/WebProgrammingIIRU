import { SubscribeForm } from "@/components/subscribe-form/subscribe-form";
import type { Route } from "./+types/news";
import { Box, Heading, Text } from "@chakra-ui/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Gamers - Subscribe" },
    { name: "description", content: "Pro Gamers - Subscribe section" },
  ];
}

export default function Subscribe() {
  return (
    <Box display="grid">
      <Heading>Subscribe now!</Heading>
      <Text>By subscribing you can receive the latest news and exclusive deals.</Text>
      <SubscribeForm />
    </Box>
  );
}
