import CommentForm from "../CommentForm/CommentForm";
import "./Comments.scss";

function Comments({ selectedVideo }) {
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
      <CommentForm selectedVideo={selectedVideo} />
      {selectedVideo.comments.length > 0 ? (
        <article className="comment__card">
          {selectedVideo.comments.map((comment) => (
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
