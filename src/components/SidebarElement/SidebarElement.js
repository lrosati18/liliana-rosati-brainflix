import "./SidebarElement.scss";
function SidebarElement(props) {
  const { video } = props;

  return (
    <div className="video">
      <img className="video__image" src={video.image} alt={video.title}></img>
      <div className="video__container">
        <p className="video__title">{video.title}</p>
        <p className="video__channel">{video.channel}</p>
      </div>
    </div>
  );
}

export default SidebarElement;
