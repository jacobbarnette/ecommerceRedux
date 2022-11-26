import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h4 className="tagLine">YOUR ONE STOP SHOP FOR FASHION</h4>
        <p>We don't follow trends, we set them.</p>
      </div>
      <div className=" btnContainer justify-content-center">
        <Button
          //onClick={() => navigate("/products")}
          className="shopBtn text-center justify-content-center"
          variant="dark"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
