import { useEffect, useState } from "react";
import { getMostPopularVideos } from "../services/you-tube-service";
import { Video } from "../types/video";

export const useMostPopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function getVideos() {
      setPopularVideos(await getMostPopularVideos());
    }

    getVideos();
  }, []);

  return popularVideos;
};
