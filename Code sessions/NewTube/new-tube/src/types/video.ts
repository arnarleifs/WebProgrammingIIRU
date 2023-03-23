import { Thumbnail } from "./thumbnail";
import { ThumbnailTypes } from "./thumbnail-types";

interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: Record<ThumbnailTypes, Thumbnail>;
}

interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface VideoContentDetails {
  duration: string;
}

export interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
  contentDetails: VideoContentDetails;
}
