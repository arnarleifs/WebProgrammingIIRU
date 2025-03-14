import { Video } from "../../types/video";

interface VideoPlayerProps {
  video: Video | undefined;
}

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  return (
    <iframe
      title="video"
      width="100%"
      height="565"
      src={`https://youtube.com/embed/${video?.id}`}
    ></iframe>
  );
};
