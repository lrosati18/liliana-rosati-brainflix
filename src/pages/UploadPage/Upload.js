import { useNavigate } from "react-router-dom";
import UploadForm from "../../components/UploadForm/UploadForm";

function Upload() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //upload functionality
    //should i be using refs?
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    alert("Your upload was successful!");
    navigate("/");
  };

  return <UploadForm submit={handleSubmit} />;
}

export default Upload;
