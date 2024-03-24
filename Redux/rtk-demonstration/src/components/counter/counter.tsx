import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Box>
      <Heading>Current counter: {counter}</Heading>
      <Button onClick={() => setCounter((counter) => counter + 1)}>
        Increase
      </Button>
    </Box>
  );
}
