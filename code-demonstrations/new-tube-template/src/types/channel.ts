import { Thumbnail } from "./thumbnail";

enum ChannelThumbnailType {
    default = "default",
    high = "high",
    medium = "medium"
}

interface ChannelSnippet {
    title: string;
    thumbnails: Record<ChannelThumbnailType, Thumbnail>
}

interface ChannelStatistics {
    subscriberCount: string;
}

export interface Channel {
    snippet: ChannelSnippet;
    statistics: ChannelStatistics;
}