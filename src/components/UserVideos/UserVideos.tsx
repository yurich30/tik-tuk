import React from 'react';
import data from '../../data/user-feed.json';
import '../VideoItem/VideoItem.css';

const UserVideos = () => {
  console.log(data.itemList);

  return (
    <div className="container item__list">
      {data.itemList.map((el) => (
        <div key={el.id}>
          <div>View Count: {el.stats.playCount}</div>
          <video
            controls
            src={el.video.playAddr}
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
