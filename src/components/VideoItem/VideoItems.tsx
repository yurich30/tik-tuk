import React from 'react';
import { videosAPI } from '../../services/videosAPI';
import { IVideos } from '../../models/IVideos';
import VideoItem from './VideoItem';

const VideoItems = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = videosAPI.useFetchAllVideosQuery('');

  return (
    <div>
      {error && <h1>Error</h1>}
      {videos &&
        videos.map((video: IVideos) => (
          <VideoItem key={video.authorMeta.id} video={video} />
        ))}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};

export default VideoItems;
