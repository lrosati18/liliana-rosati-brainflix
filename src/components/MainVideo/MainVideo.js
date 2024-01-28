import "./MainVideo.scss";

function MainVideo({ selectedVideo }) {
  return (
    <main className="main">
      <video
        className="main__image"
        controls
        poster={selectedVideo.image}
      ></video>
    </main>
  );
}

export default MainVideo;
