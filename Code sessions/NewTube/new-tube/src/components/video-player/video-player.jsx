export const VideoPlayer = ({ video }) => {
  return (
    <iframe
      title="video"
      width="100%"
      height="565"
      src={`https://youtube.com/embed/${video.id}`}
    ></iframe>
  );
};
