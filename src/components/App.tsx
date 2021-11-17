import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoItems from './VideoItem/VideoItems';
import Navbar from './NavBar/Navbar';
import UserInfo from './UserInfo/UserInfo';
import NotFound from './NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoItems />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
