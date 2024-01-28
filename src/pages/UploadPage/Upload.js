import { useNavigate } from "react-router-dom";
import UploadForm from "../../components/UploadForm/UploadForm";

function Upload() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your upload was successful!");
    navigate("/");
  };

  return <UploadForm submit={handleSubmit} />;
}

export default Upload;
