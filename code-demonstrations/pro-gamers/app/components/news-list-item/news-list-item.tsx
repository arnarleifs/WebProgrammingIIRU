import { Card, Button, Badge } from "@chakra-ui/react";
import type { News } from "@/types/news";
import { useNavigate } from "react-router";

interface NewsListItemProps {
    item: News;
    onRemove: (newsItemId: number) => void;
    onUpdate: (newsItem: News) => void;
}

export function NewsListItem(props: NewsListItemProps) {
    const navigate = useNavigate();

    return (
        <Card.Root width="500px">
            <Card.Body gap="2">
                <Card.Title mt="2">{props.item.title}</Card.Title>
                <Card.Description>{props.item.shortDescription}</Card.Description>
                <Badge size="md">{props.item.category?.toLocaleUpperCase()}</Badge>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button colorPalette="red" variant="surface" onClick={() => props.onRemove(props.item.id)}>Remove</Button>
                <Button colorPalette="yellow" variant="surface" onClick={() => props.onUpdate(props.item)}>Update</Button>
                <Button onClick={() => navigate(`/news/${props.item.id}`)}>See more</Button>
            </Card.Footer>
        </Card.Root>
    )
}