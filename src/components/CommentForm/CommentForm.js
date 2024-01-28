import formImage from "../../assets/images/Mohan-muruge.jpg";
import formIcon from "../../assets/images/icons/add_comment.svg";
import "./CommentForm.scss";

function CommentForm({ selectedVideo }) {
  return (
    <div className="comments__form">
      <p className="comments__number">
        {selectedVideo.comments.length} Comments
      </p>
      <form className="post" action="submit">
        <img className="post__image" src={formImage} alt="Mohan Muruge"></img>
        <div className="post__container">
          <div className="post__wrapper">
            <label htmlFor="comment" className="post__label">
              Join the Conversation
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              className="post__input"
              placeholder="Add a new comment"
              cols="28"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" id="submit" className="post__button">
            <img className="post__icon" src={formIcon} alt="submit icon"></img>
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
