export interface CommentSnippet {
  authorDisplayName: string;
  authorProfileImageUrl: string;
  textDisplay: string;
  videoId: string;
}

interface CommentThreadSnippet {
  videoId: string;
  topLevelComment: {
    id: string;
    snippet: CommentSnippet
  }
}

export interface CommentThread {
  id: string;
  snippet: CommentThreadSnippet
}