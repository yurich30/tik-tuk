import React from 'react';
import data from '../../data/user-feed.json';
import '../VideoItem/VideoItem.css';

const UserVideos = () => {
  console.log(data.itemList);

  return (
    <div className="container item__list">
      {data.itemList.map((element) => (
        <div key={element.id}>
          <div>View Count: {element.stats.playCount}</div>
          <video
            controls
            src={element.video.playAddr}
            autoPlay
            loop
            className="item__video"
          />
        </div>
      ))}
    </div>
  );
};

export default UserVideos;
