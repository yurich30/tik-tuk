import React, {useEffect} from 'react';
import axios from "axios";

const App: React.FC = () => {

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '917d761687msha6ac156d38ce065p1a07fcjsnf7fe4f79a896'
      }
    };

    (async () => {
      // @ts-ignore
      const res = await axios.request(options)
      console.log(res)
    })()
    // @ts-ignore
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    console.log('useEffect')
  })

  return (
    <div>
      TikTuk
    </div>
  )
}

export default App;
