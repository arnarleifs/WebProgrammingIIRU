import { Button, createListCollection, For, HStack, Input, Textarea } from "@chakra-ui/react"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
import { useEffect, useRef, useState, type RefObject } from "react"
import { NewsCategory, type News } from "@/types/news"

const frameworks = createListCollection({
    items: [
        { label: "World", value: "world" },
        { label: "Financial", value: "financial" },
        { label: "Technology", value: "technology" }
    ],
})

interface AddOrUpdateNewsItemModalProps {
    onSubmit: (newsItem: Partial<News>) => void;
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    selectedNewsItem?: News | undefined;
}

export function AddOrUpdateNewsItemModal(props: AddOrUpdateNewsItemModalProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [initializedData, setInitializedData] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    useEffect(() => {
        if (props.selectedNewsItem && !initializedData) {
            setTitle(props.selectedNewsItem.title);
            setDescription(props.selectedNewsItem.shortDescription);
            setCategory(props.selectedNewsItem.category);
            setInitializedData(true);
        }
    }, [props.selectedNewsItem, initializedData])

    function submit() {
        props.onSubmit({
            title,
            shortDescription: description,
            category: category as NewsCategory
        });
        
        cleanUp();
    }

    function cleanUp() {
        // Reset field values
        setTitle('');
        setDescription('');
        setCategory('');
        setInitializedData(false);
    }

    function renderTitle() {
        if (props.selectedNewsItem) {
            return "Update";
        }

        return "Add";
    }

    return (
        <DialogRoot key="add-or-update-modal" size="md" open={props.isOpen}>
            <Button variant="solid" marginBottom={5} size="md" onClick={props.openModal}>
                Add news item
            </Button>
            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>{renderTitle()}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add title.." variant="outline" marginBottom={5} />
                    <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Add description.." marginBottom={5} />
                    <SelectRoot value={[category]} multiple={false} key="news-item-category-select" onValueChange={s => setCategory(s.value[0])} size="md" collection={frameworks}>
                        <SelectLabel>Category</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent portalRef={contentRef as unknown as RefObject<HTMLElement>}>
                            {frameworks.items.map((category) => (
                                <SelectItem item={category} key={category.value}>
                                    {category.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
                </DialogBody>
                <DialogFooter>
                    <Button variant="outline" onClick={() => {
                        props.closeModal()
                        cleanUp();
                    }}>Cancel</Button>
                    <Button onClick={submit}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}