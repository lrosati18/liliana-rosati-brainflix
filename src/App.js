import { useState } from "react";
import "./App.scss";
// import videosData from "./data/videos.json";
// import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import PlayerPage from "./pages/PlayerPage/Player";
import UploadPage from "./pages/UploadPage/Upload";
// import Main from "./components/Main/Main";
// import Comments from "./components/Comments/Comments";
// import Sidebar from "./components/Sidebar/Sidebar";
// import MainVideo from "./components/Main/MainVideo";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  // const [videos] = useState(videosData);
  // const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  // const handleSelectVideo = (clicked) => {
  //   const foundVideo = videoDetails.find((video) => clicked === video.id);
  //   setSelectedVideo(foundVideo);
  // };

  // const filteredVideos = videos.filter(
  //   (video) => video.id !== selectedVideo.id
  // );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PlayerPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/upload" element={<UploadPage />} />
        {/* Player page is same as home but with a different video loaded*/}
        {/* Ensure sidebar also changes to not show selected video*/}
        <Route path="/videos:videoId" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
