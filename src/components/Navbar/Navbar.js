import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { isUserLoggedIn } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = isUserLoggedIn();
  const navigate = useNavigate();

  const onAuthButtonClick = () => {
    if (isLoggedIn) {
      localStorage.clear();
    }
    navigate("/login");
  };

  return (
    <div className=" bg-dark sticky-top">
      <div className="px-5 py-2 d-flex align-items-center justify-content-between">
        <div className="">
          <div className="display-6 text-danger py-1"> MBA </div>
        </div>

        <div>
          <Form.Control size="lg" type="text" placeholder="Search Movie" />
        </div>

        <div>
          <Button
            onClick={onAuthButtonClick}
            className="px-5 py-2"
            variant="danger"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;