function SidebarElement(props) {
  const { video, selectVideo } = props;

  return (
    <div className="video">
      <button className="video__button" onClick={() => selectVideo(video.id)}>
        <img className="video__image" src={video.image} alt={video.title}></img>
        <p className="video__title">{video.title}</p>
        <p className="video__channel">{video.channel}</p>
      </button>
    </div>
  );
}

export default SidebarElement;
