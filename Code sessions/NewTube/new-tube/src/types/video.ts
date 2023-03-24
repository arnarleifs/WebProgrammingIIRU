import { Thumbnail } from "./thumbnail";
import { ThumbnailTypes } from "./thumbnail-types";

interface VideoStatistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  thumbnails: Record<ThumbnailTypes, Thumbnail>;
}

interface VideoContentDetails {
  duration: string;
}

export interface Video {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
  contentDetails: VideoContentDetails;
}