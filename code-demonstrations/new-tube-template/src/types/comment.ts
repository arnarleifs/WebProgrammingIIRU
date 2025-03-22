export interface CommentThreadSnippet {
  authorProfileImageUrl: string;
  authorDisplayName: string;
  textDisplay: string;
}

interface CommentSnippet {
  channelId: string;
  videoId: string;
  topLevelComment: {
    id: string;
    snippet: CommentThreadSnippet;
  }
}

export interface Comment {
  id: string;
  snippet: CommentSnippet;
}