import React from 'react';
import data from '../../data/user-feed.json';

const UserInfo = () => {
  console.log(data.itemList);
  const userData = data.itemList.map((el) => <div key={el.id}>{el.id}</div>);

  return <div>{userData}</div>;
};

export default UserInfo;
