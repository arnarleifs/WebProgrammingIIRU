import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideoById } from "../../services/you-tube-service";

export const VideoDetailSite = () => {
  const { videoId } = useParams();

  useEffect(() => {
    async function getVideoDetails() {
      await getVideoById(videoId);
    }
    getVideoDetails();
  }, [videoId]);

  return <div></div>;
};
