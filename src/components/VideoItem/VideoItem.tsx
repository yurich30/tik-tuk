import React from 'react';
import { IVideos } from '../../models/IVideos';
import './VideoItem.css';
import { Link } from 'react-router-dom';

interface VideoItemProps {
  video: IVideos;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <div className="item">
      <div className="item__header">
        <Link to={`/user`}>
          <div className="author__info">
            <img
              src={video.authorMeta.avatar}
              alt="avatar"
              className="item__avatar"
            />
            <div className="info">
              <div className="name">{video.authorMeta.name}</div>
              <div className="hashtags">{video?.hashtags[0]?.name}</div>
              <div className="music">
                {video.musicMeta.musicName} - {video.musicMeta.musicAuthor}
              </div>
            </div>
          </div>
        </Link>
        <button className="follow__button">Follow</button>
      </div>
      <div className="item__video-section">
        <video
          // controls
          src={video.videoUrl}
          // autoPlay
          // loop
          className="item__video"
        ></video>
        <div className="item__video-info">
          <div className="item__video-likes"></div>
          <div className="item__videos-comments"></div>
          <div className="item__videos-repost"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
