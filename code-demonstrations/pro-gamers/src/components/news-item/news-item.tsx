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
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

interface NewsItemProps {
  item: News;
  removeItem: (id: number) => void;
  updateItem: (item: News) => void;
}

export function NewsItem(props: NewsItemProps) {
  const navigate = useNavigate();
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
          <Button onClick={() => navigate(`/news/${props.item.id}`)}>
            View more
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}

NewsItem.propTypes = {
  // This is the item which should be displayed within the component
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
  // This is the function which notifies the parent that the item is
  // going to be deleted
  removeItem: PropTypes.func.isRequired,
  // This is the function which notifies the parent that the item is
  // going to be updated
  updateItem: PropTypes.func.isRequired,
};
