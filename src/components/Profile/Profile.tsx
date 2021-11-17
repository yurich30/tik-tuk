import { videosAPI } from '../../services/videosAPI';
import Loader from '../Loader/Loader';
import React from 'react';
import './Profile.css';
import UserVideos from '../UserVideos/UserVideos';

const Profile = () => {
  const { data: user, error, isLoading } = videosAPI.useFetchUserInfoQuery('');
  return (
    <div className="container">
      {error && <h1>Error</h1>}

      {user && (
        <>
          <div className="user">
            <img
              src={user.user.avatarMedium}
              alt="user__avatar"
              className="user__avatar"
            />
            <h2>{user.user.nickname}</h2>
            <div className="user__stats">
              <div>Followers: {user.stats.followerCount}</div>
              <div>Followed: {user.stats.followingCount}</div>
              <div>Hearts: {user.stats.heart}</div>
              <div>Videos: {user.stats.videoCount}</div>
            </div>
          </div>
          <UserVideos />
        </>
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default Profile;
