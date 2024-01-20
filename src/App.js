import { useState } from "react";
import "./App.scss";
import videosData from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [videos, setVidoes] = useState(videosData);
  const [selectVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clicked) => {
    const foundVideo = videoDetails.find((video) => clicked === video.id);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter((video) => video.id !== selectVideo.id);

  return (
    <div className="App">
      <Header />
      <Sidebar videos={filteredVideos} selectVideo={handleSelectVideo} />
    </div>
  );
}

export default App;
