import { Thumbnail } from "./thumbnail";

enum VideoThumbnailType {
  default = "default",
  high = "high",
  maxres = "maxres",
  medium = "medium",
  standard = "standard"
}

interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: Record<VideoThumbnailType, Thumbnail>;
}

interface VideoContentDetails {
  duration: string;
}

interface VideoStatistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface Video {
  id: string;
  contentDetails: VideoContentDetails;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}