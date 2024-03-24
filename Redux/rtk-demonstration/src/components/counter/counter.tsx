import { Box, Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { increment } from "../../redux/features/counter/counter-slice";

export function Counter() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box>
      <Heading>Current counter: {counter}</Heading>
      <Button onClick={() => dispatch(increment())}>Increase</Button>
    </Box>
  );
}
