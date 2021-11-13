import React, { useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '294f036434msh90cf68bd9dd8898p152614jsn805ac4221ef0',
      },
    };

    const getData = async () => {
      // @ts-ignore
      const res = await axios.request(options);
      console.log(res.data);
    };

    getData();
  });

  return <div>TikTuk</div>;
};

export default App;
