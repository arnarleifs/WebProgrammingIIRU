import { Box } from "@chakra-ui/react";
import { Counter } from "./components/counter/counter";
import { Footer } from "./components/footer/footer";
import { DisplayUser } from "./components/display-user/display-user";

export function App() {
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
