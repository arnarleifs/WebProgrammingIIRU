import { Button, Card, Image, Text } from "@chakra-ui/react"
import type { Game } from "@/types/game";

interface GameListItemProps {
    game: Game;
}

export function GamesListItem(props: GameListItemProps) {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image
                src={props.game.thumbnail}
                alt=""
            />
            <Card.Body gap="2">
                <Card.Title>{props.game.name}</Card.Title>
                <Card.Description>
                    {props.game.shortDescription}
                </Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {props.game.rating}
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="ghost">Read more</Button>
            </Card.Footer>
        </Card.Root>
    )
}