import { ChannelAuthorInformationPane } from "../channel-author-information-pane/channel-author-information-pane";
import { VideoDescription } from "../video-description/video-description";

export const VideoPlayerInformationPane = ({ video, channel }) => {
  return (
    <div>
      <h3>{video.snippet?.title}</h3>
      <ChannelAuthorInformationPane channel={channel} />
      <VideoDescription video={video} />
    </div>
  );
};
