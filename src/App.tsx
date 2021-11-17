import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoItems from './components/VideoItem/VideoItems';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo/UserInfo';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoItems />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/user/:id" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
