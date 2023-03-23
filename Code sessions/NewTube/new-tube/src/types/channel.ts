import { Thumbnail } from "./thumbnail";
import { ThumbnailTypes } from "./thumbnail-types";

interface ChannelSnippet {
  title: string;
  description: string;
  thumbnails: Record<ThumbnailTypes, Thumbnail>;
}

interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
}

export interface Channel {
  id: string;
  snippet: ChannelSnippet;
  statistics: ChannelStatistics;
}
