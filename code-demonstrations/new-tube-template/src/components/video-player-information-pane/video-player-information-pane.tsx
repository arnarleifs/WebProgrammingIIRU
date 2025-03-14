import { Channel } from "../../types/channel";
import { Video } from "../../types/video";
import { ChannelAuthorInformationPane } from "../channel-author-information-pane/channel-author-information-pane";
import { VideoDescription } from "../video-description/video-description";

interface VideoPlayerInformationPaneProps {
  video: Video | undefined;
  channel: Channel | undefined;
}

export const VideoPlayerInformationPane = ({ video, channel }: VideoPlayerInformationPaneProps) => {
  return (
    <div>
      <h3>{video?.snippet?.title}</h3>
      <ChannelAuthorInformationPane channel={channel} />
      <VideoDescription video={video} />
    </div>
  );
};
