import Main from "../../components/Main/Main";
import MainVideo from "../../components/MainVideo/MainVideo";
import Comments from "../../components/Comments/Comments";
import Sidebar from "../../components/Sidebar/Sidebar";

import videosData from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

import { useState } from "react";
import { useParams } from "react-router";

function Player() {
  const { videoId } = useParams();

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
    <section className="player">
      <MainVideo selectedVideo={selectedVideo} />
      <Main selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      <Sidebar videos={filteredVideos} selectVideo={handleSelectVideo} />
    </section>
  );
}

export default Player;
