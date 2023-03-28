import { Thumbnail } from "./thumbnail";
import { ThumbnailTypes } from "./thumbnail-types";

interface ChannelSnippet {
  title: string;
  description: string;
  thumbnails: Record<ThumbnailTypes, Thumbnail>;
}

interface ChannelStatistics {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export interface Channel {
  id: string;
  snippet: ChannelSnippet;
  statistics: ChannelStatistics;
}