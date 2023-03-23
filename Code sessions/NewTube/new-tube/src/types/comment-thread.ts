export interface CommentSnippet {
  videoId: string;
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

interface CommentThreadSnippet {
  videoId: string;
  topLevelComment: {
    id: string;
    snippet: CommentSnippet;
  };
}

export interface CommentThread {
  id: string;
  snippet: CommentThreadSnippet;
}
