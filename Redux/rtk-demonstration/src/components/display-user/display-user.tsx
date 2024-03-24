import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export function DisplayUser() {
  const user = useSelector((state: RootState) => state.user.user);
  const isUserPopulated = Object.keys(user).length > 0;

  return isUserPopulated ? (
    <Card>
      <CardHeader>
        <Heading size="md">{user.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Bio
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.bio}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  ) : (
    <></>
  );
}
