import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadForm from "../../components/UploadForm/UploadForm";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Upload() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTitle = form.title.value;
    const newDescription = form.description.value;

    const formData = {
      title: newTitle,
      description: newDescription,
    };

    axios.post(`${SERVER_URL}/videos`, formData);

    alert("Your upload was successful!");
    navigate("/");
  };

  return <UploadForm submit={handleSubmit} />;
}

export default Upload;
