import MainVideo from "../../components/MainVideo/MainVideo";
import Main from "../../components/Main/Main";
import Comments from "../../components/Comments/Comments";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Player.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=99e4aed7-f8e8-4932-8bf2-2901fa146633";

function PlayerPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ comments: [] });
  const { videoId } = useParams();

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/videos/${id}${API_KEY}`);
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
      const response = await axios.get(`${BASE_URL}/videos${API_KEY}`);
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
