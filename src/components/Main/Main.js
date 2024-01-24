import "./Main.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=99e4aed7-f8e8-4932-8bf2-2901fa146633";

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
    <section className="details">
      <h1 className="details__title">{selectedVideo.title}</h1>
      <div className="details__info">
        <div className="details__wrapper">
          <p className="details__channel">By {selectedVideo.channel}</p>
          <p className="details__date">{toDate(selectedVideo.timestamp)}</p>
        </div>
        <div className="details__wrapper">
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
      <p className="details__description">{selectedVideo.description}</p>
    </section>
  );
}

export default Main;
