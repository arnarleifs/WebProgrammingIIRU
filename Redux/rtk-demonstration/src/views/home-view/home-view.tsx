import { Box } from "@chakra-ui/react";
import { Counter } from "../../components/counter/counter";
import { DisplayUser } from "../../components/display-user/display-user";
import { Footer } from "../../components/footer/footer";

export function HomeView() {
  return (
    <Box>
      <Box padding={10} display="grid" gap={5}>
        <Counter />
        <DisplayUser />
      </Box>
      <Footer />
    </Box>
  );
}
