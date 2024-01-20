import "./Main.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function Main({ selectedVideo }) {
  function toDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  }

  return (
    <section className="main">
      <div className="main__container">
        <video
          className="main__image"
          controls
          poster={selectedVideo.image}
        ></video>
      </div>
      <h1 className="main__title">{selectedVideo.title}</h1>
      <div className="main__info">
        <div className="main__wrapper">
          <p className="main__channel">By {selectedVideo.channel}</p>
          <p className="main__date">{toDate(selectedVideo.timestamp)}</p>
        </div>
        <div className="main__wrapper">
          <div className="views">
            <img className="views__icon" src={viewsIcon} alt="views icon"></img>
            <p className="views__text">{selectedVideo.views}</p>
          </div>
          <div className="likes">
            <img className="likes__icon" src={likesIcon} alt="likes icon"></img>
            <p className="likes__text">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="main__description">{selectedVideo.description}</p>
    </section>
  );
}

export default Main;
