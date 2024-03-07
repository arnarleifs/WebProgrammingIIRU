import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { News, NewsCategory } from "../../types/news";

interface NewsItemModalProps {
  item?: News;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (news: Partial<News>) => void;
}

export function NewsItemModal(props: NewsItemModalProps) {
  const [title, setTitle] = useState<string>(props.item?.title ?? "");
  const [shortDescription, setShortDescription] = useState<string>(
    props.item?.shortDescription ?? ""
  );
  const [category, setCategory] = useState<string>(props.item?.category ?? "");

  useEffect(() => {
    setTitle(props.item?.title ?? "");
    setShortDescription(props.item?.shortDescription ?? "");
    setCategory(props.item?.category ?? "");
  }, [props.item]);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl marginBottom={5}>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <FormHelperText>Title of the news item.</FormHelperText>
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Short description</FormLabel>
            <Textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Short description for the news item"
            />
            <FormHelperText>Short description of the news item.</FormHelperText>
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Category</FormLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select a categoy"
            >
              <option value={NewsCategory.World}>World</option>
              <option value={NewsCategory.Financial}>Financial</option>
              <option value={NewsCategory.Technology}>Technology</option>
            </Select>
            <FormHelperText>Category of the news item.</FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button
            onClick={() =>
              props.onAdd({
                title,
                shortDescription,
                category: category as NewsCategory,
              })
            }
            variant="ghost"
          >
            {props.item ? "Update" : "Add"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
