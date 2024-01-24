import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import "./Comments.scss";

const BASE_URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=99e4aed7-f8e8-4932-8bf2-2901fa146633";

function Comments({ selectedVideo }) {
  //Do something with selectedVideo props or useParams to get videoId for get call and selected video for comment form tag
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/${videoId}${API_KEY}`
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
    <section className="comment">
      {/* <CommentForm selectedVideo={selectedVideo} /> */}
      {comments.length > 0 ? (
        <article className="comment__card">
          {comments.map((comment) => (
            <div key={comment.id}>
              <div className="comment__wrapper">
                <div className="comment__avatar"></div>
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">{toDate(comment.timestamp)}</p>
              </div>
              <p className="comment__content">{comment.comment}</p>
            </div>
          ))}
        </article>
      ) : (
        <p>No comments.</p>
      )}
    </section>
  );
}

export default Comments;
