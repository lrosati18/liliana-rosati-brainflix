import formImage from "../../assets/images/Mohan-muruge.jpg";
import formIcon from "../../assets/images/icons/add_comment.svg";
import "./CommentForm.scss";

function CommentForm({ selectedVideo }) {
  return (
    <div className="comments__form">
      <p className="comments__number">
        {selectedVideo.comments.length} Comments
      </p>
      <form className="form" action="submit">
        <img className="form__image" src={formImage} alt="Mohan Muruge"></img>
        <div className="form__container">
          <div className="form__wrapper">
            <label for="comment" class="form__label">
              Join the Conversation
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              className="form__input"
              placeholder="Add a new comment"
              cols="28"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" id="submit" className="form__button">
            <img className="form__icon" src={formIcon}></img>Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
