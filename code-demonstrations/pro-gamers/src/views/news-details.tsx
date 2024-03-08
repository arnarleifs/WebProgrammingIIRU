import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Badge,
  Box,
  Heading,
  IconButton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import json from "../resources/news.json";
import { News } from "../types/news";
import { ArrowBackIcon } from "@chakra-ui/icons";

export function NewsDetails() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [newsItem, setNewsItem] = useState<News | undefined>();
  const { newsItemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getNewsItem() {
      try {
        const promise = new Promise<News | undefined>((resolve, reject) => {
          setTimeout(() => {
            const news = json.news as News[];
            resolve(news.find((n) => n.id === parseInt(newsItemId ?? "")));
          }, 2000);
        });
        setNewsItem(await promise);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getNewsItem();
  }, [newsItemId]);

  return (
    <Box>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        onClick={() => navigate(-1)}
        marginBottom={5}
        icon={<ArrowBackIcon />}
      />
      {loading ? (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      ) : error ? (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            An error occurred
          </AlertTitle>
          <AlertDescription maxWidth="sm">{error}</AlertDescription>
        </Alert>
      ) : newsItem === undefined ? (
        <Alert
          status="warning"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            News item with id '{newsItemId}' was not found
          </AlertTitle>
        </Alert>
      ) : (
        <Box>
          <Heading size="2xl" marginBottom={5}>
            {newsItem?.title}
          </Heading>
          <Text fontSize="lg">{newsItem?.longDescription}</Text>
          <Text fontSize="xl" fontWeight="bold">
            Category
            <Badge ml="1" fontSize="1.2em" colorScheme="green">
              {newsItem?.category}
            </Badge>
          </Text>
        </Box>
      )}
    </Box>
  );
}
