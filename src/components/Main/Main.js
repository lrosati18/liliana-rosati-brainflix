// import { useState } from "react";
// import videoInfo from "../../data/video-details.json";
import "./Main.scss";

function Main({ selectedVideo }) {
  // const [video, setVideo] = useState(videoInfo[0]);

  // const changeVideo = (videoId) => {
  //   const newVideo = videoInfo.find((video) => video.id === videoId);
  //   setVideo(newVideo);
  // };

  // function toDate(timestamp) {
  //   const date = new Date(timestamp);
  //   const formattedDate = date.toLocaleDateString("en-US", {
  //     timeZone: "UTC",
  //     month: "2-digit",
  //     day: "2-digit",
  //     year: "numeric",
  //   });

  //   return formattedDate;
  // }

  return (
    <section className="main">
      <div className="main__container">
        <img className="main__image" src={selectedVideo.image} />
      </div>
      <h1 className="main__title">{selectedVideo.title}</h1>
      <div className="main__info">
        <p className="main__channel">By {selectedVideo.channel}</p>
        <p className="main__date">{toDate(selectedVideo.timestamp)}</p>
        <p className="main__views">{selectedVideo.views}</p>
        <p className="main__likes">{selectedVideo.likes}</p>
      </div>
      <p className="main__description">{selectedVideo.description}</p>
    </section>
  );
}

export default Main;
