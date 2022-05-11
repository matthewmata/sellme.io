import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Drafts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <a onClick={() => navigate("/profile/postings")}>Postings</a>
      <a onClick={() => navigate("/profile/drafts")}>Drafts</a>
      <a onClick={() => navigate("/profile/settings")}>Profile</a>
      <div>Drafts</div>
    </div>
  );
};

export default Drafts;
