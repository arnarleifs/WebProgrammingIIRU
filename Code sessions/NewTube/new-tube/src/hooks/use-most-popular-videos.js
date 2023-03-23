import { useEffect, useState } from "react";
import { getMostPopularVideos } from "../services/you-tube-service";

export const useMostPopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      setPopularVideos(await getMostPopularVideos());
    }

    getVideos();
  }, []);

  return popularVideos;
};
