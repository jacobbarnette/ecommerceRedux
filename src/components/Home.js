import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homepageImg from "../Assets/homepage-image.png";
import blueLine from "../Assets/blueUnderline.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeContainer container">
      <div className="home one row">
        <div className="col">
          <h4 className="tagLine tagLineTop text-center text-muted">
            Voted Best Retail Site of 2022
          </h4>
          <p className="tagLine">We don't follow trends, we set them.</p>

          <div className=" btnContainer justify-content-center">
            <Button
              onClick={() => navigate("/items")}
              onTouchStart={() => navigate("/items")}
              className="shopBtn text-center justify-content-center"
              variant="dark"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="col">
          <img className="homeImg" src={homepageImg} alt="people"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
