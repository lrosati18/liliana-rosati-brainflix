import MainVideo from "../../components/MainVideo/MainVideo";
import Main from "../../components/Main/Main";
import Comments from "../../components/Comments/Comments";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Player.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function PlayerPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ comments: [] });
  const { videoId } = useParams();

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${SERVER_URL}/videos/${id}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoDetails(videoId);
  }, [videoId]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/videos`);
      setVideos(response.data);
      if (response.data.length > 0) {
        fetchVideoDetails(response.data[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <section className="player">
      <MainVideo selectedVideo={selectedVideo} />
      <div className="player__desktop">
        <Main selectedVideo={selectedVideo} />
        <Comments selectedVideo={selectedVideo} />
      </div>
      <Sidebar videos={filteredVideos} selectVideo={fetchVideoDetails} />
    </section>
  );
}
export default PlayerPage;
