import type { Route } from "./+types/news";
import { Box, Heading, Text } from "@chakra-ui/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Gamers - About" },
    { name: "description", content: "Pro Gamers - About section" },
  ];
}

export default function About() {
  return (
    <Box display="grid">
      <Heading>About us</Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita, unde deleniti vero excepturi consequuntur molestiae repellendus iusto dolor voluptate omnis neque voluptatibus earum nesciunt architecto quisquam. Dicta, mollitia enim?</Text>
    </Box>
  );
}
