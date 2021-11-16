import React, { useEffect } from 'react';
import { videosAPI } from './services/videosAPI';

const App: React.FC = () => {
  useEffect(() => {}, []);

  const {
    data: videos,
    error,
    isLoading,
  } = videosAPI.useFetchAllVideosQuery(5);

  return (
    <div>
      {error && <h1>Error</h1>}
      {videos &&
        videos.map((video: any) => (
          <div key={video.authorMeta.id}>{video.authorMeta.name}</div>
        ))}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};

export default App;
