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
import { useEffect, useRef } from "react";
import { News, NewsCategory } from "../../types/news";

interface NewsItemModalProps {
  item?: News;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (news: Partial<News>) => void;
}

export function NewsItemModal(props: NewsItemModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const shortDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (props.item?.id) {
      titleRef.current!.value = props.item.title;
      shortDescriptionRef.current!.value = props.item.shortDescription;
      categoryRef.current!.value = props.item.category;
    }
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
            <Input ref={titleRef} type="text" />
            <FormHelperText>Title of the news item.</FormHelperText>
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Short description</FormLabel>
            <Textarea
              ref={shortDescriptionRef}
              placeholder="Short description for the news item"
            />
            <FormHelperText>Short description of the news item.</FormHelperText>
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Category</FormLabel>
            <Select ref={categoryRef} placeholder="Select a categoy">
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
                title: titleRef.current?.value,
                shortDescription: shortDescriptionRef.current?.value,
                category: categoryRef.current?.value as NewsCategory,
              })
            }
            variant="ghost"
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
