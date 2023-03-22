const API_KEY = "AIzaSyDIeapkQfZcQWE3s18Ap88m4vXM-0vQKHA";

export const getMostPopularVideos = async () => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`
    );
    const json = await response.json();
    return json.items;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getVideoById = async (id) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
