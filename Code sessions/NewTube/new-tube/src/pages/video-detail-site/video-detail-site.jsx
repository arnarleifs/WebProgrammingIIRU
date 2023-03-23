import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideoById, getChannelById } from "../../services/you-tube-service";
import { VideoPlayer } from "../../components/video-player/video-player";
import { VideoPlayerInformationPane } from "../../components/video-player-information-pane/video-player-information-pane";
import styles from "./video-detail-site.module.css";
import { Comments } from "../../components/comments/comments";

export const VideoDetailSite = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    if (!videoId) { return; }
    async function getInitialData() {
      const video = await getVideoById(videoId);
      const channel = await getChannelById(video.snippet?.channelId);
      setVideo(video);
      setChannel(channel);
    }
    getInitialData();
  }, [videoId]);

  return (
    <div className={styles.container}>
      <VideoPlayer video={video} />
      <VideoPlayerInformationPane video={video} channel={channel} />
      <Comments videoId={video.id} />
    </div>
  );
};
