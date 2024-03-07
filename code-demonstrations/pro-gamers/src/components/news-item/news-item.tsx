import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Button,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { News } from "../../types/news";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface NewsItemProps {
  item: News;
  removeItem: (id: number) => void;
  updateItem: (item: News) => void;
}

export function NewsItem(props: NewsItemProps) {
  return (
    <Card marginBottom={5}>
      <CardHeader>
        <Heading size="md">{props.item.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{props.item.shortDescription}</Text>
        <Badge>{props.item.category}</Badge>
      </CardBody>
      <CardFooter>
        <Stack direction="row" spacing={4}>
          <Button
            onClick={() => props.updateItem(props.item)}
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Update
          </Button>
          <Button
            onClick={() => props.removeItem(props.item.id)}
            leftIcon={<DeleteIcon />}
            colorScheme="pink"
            variant="solid"
          >
            Remove
          </Button>
          <Button>View more</Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}
