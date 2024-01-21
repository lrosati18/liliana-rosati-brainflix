import { useState } from "react";
import "./App.scss";
import videosData from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Comments from "./components/Comments/Comments";
import Sidebar from "./components/Sidebar/Sidebar";
import MainVideo from "./components/Main/MainVideo";

function App() {
  const [videos] = useState(videosData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clicked) => {
    const foundVideo = videoDetails.find((video) => clicked === video.id);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="App">
      <Header />
      <MainVideo selectedVideo={selectedVideo} />
      <div className="App__desktop">
        <Main selectedVideo={selectedVideo} />
        <Comments selectedVideo={selectedVideo} />
      </div>
      <Sidebar videos={filteredVideos} selectVideo={handleSelectVideo} />
    </div>
  );
}

export default App;
