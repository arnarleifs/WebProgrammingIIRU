import { Channel } from "../types/channel";
import { Comment } from "../types/comment";
import { Video } from "../types/video";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

async function request<TResponse>(url: string, fetchConfig: RequestInit, cb: (json: any) => TResponse): Promise<TResponse> {
  const response = await fetch(url, fetchConfig);
  const json = await response.json();
  return cb(json);
}

export const getMostPopularVideos = async () => {
  try {
    return await request<Video[]>(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`, 
      {}, 
      json => json.items
    );
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getVideoById = async (id: string | undefined) => {
  try {
    return await request<Video | undefined>(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`, 
      {}, json => json.items[0]
    );
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getChannelById = async (id: string) => {
  try {
    return request<Channel | undefined>(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`, 
      {}, 
      json => json.items[0]);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getCommentsByVideoId = async (videoId: string) => {
  try {
    return await request<Comment[]>(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`, 
      {}, 
      json => json.items);
  } catch (e) {
    console.error(e);
    return [];
  }
};
