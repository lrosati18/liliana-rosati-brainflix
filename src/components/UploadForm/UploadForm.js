import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/icons/publish.svg";
import "./UploadForm.scss";

function UploadForm({ submit }) {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form onSubmit={submit} className="form" action="submit">
        <div className="form__tablet">
          <div className="form__wrapper">
            <label className="form__label">Video Thumbnail</label>
            <img
              className="form__thumbnail"
              src={thumbnail}
              alt="video thumbnail"
            ></img>
          </div>

          <div className="form__desktop">
            <div className="form__wrapper">
              <label for="title" className="form__label">
                Title your video
              </label>
              <input
                type="text"
                name="title"
                placeholder="Add a title to your video"
                className="form__input"
              ></input>
            </div>

            <div className="form__wrapper">
              <label for="description" className="form__label">
                Add a video description
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Add a description to your video"
                className="form__description"
                cols="28"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="buttons__publish" type="submit">
            <img
              className="buttons__icon"
              src={publishIcon}
              alt="publish icon"
            ></img>
            Publish
          </button>
          <p className="buttons__cancel">Cancel</p>
        </div>
      </form>
    </section>
  );
}

export default UploadForm;
