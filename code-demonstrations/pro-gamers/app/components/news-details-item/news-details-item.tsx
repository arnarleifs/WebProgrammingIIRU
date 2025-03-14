import { Box, Button, Card, Text, Heading, Badge } from "@chakra-ui/react"
import { useNewsDetailsItem } from "./hooks/use-news-details-item";
import { useNavigate } from "react-router";

interface NewsDetailsItemProps {
  newsItemId: number
}

export function NewsDetailsItem(props: NewsDetailsItemProps) {
  const newsItem = useNewsDetailsItem(props.newsItemId);
  const navigate = useNavigate();

  return (
    <Box>
      <Button onClick={() => navigate(-1)} marginBottom={5}>Go back</Button>
      <Card.Root maxW="xl" overflow="hidden">
        <Card.Body gap="2">
          <Card.Title>{newsItem?.title}</Card.Title>
          <Card.Description>
            {newsItem?.longDescription}
          </Card.Description>
          <Badge size="md">{newsItem?.category?.toLocaleUpperCase()}</Badge>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}