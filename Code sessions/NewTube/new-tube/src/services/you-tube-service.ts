import { Video } from "../types/video";
import { Channel } from "../types/channel";
import { CommentThread } from "../types/comment-thread";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(url, config);
  const json = await response.json();
  return json.items as TResponse;
}

export const getMostPopularVideos = async () => {
  try {
    return await request<Video[]>(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`
    );
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getVideoById = async (id) => {
  try {
    const videos = await request<Video[]>(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
    );
    return videos[0];
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getChannelById = async (id) => {
  try {
    const channels = await request<Channel[]>(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
    );
    return channels[0];
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getCommentsByVideoId = async (videoId) => {
  try {
    return await request<CommentThread[]>(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    );
  } catch (e) {
    console.error(e);
    return [];
  }
};
