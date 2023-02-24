import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homepageImg from "../Assets/homepage-image.png";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="homeContainer container">
        <div className="home row">
          <div className="col-lg-6">
            <h4 className="tagLine tagLineTop text-center text-muted">
              Voted Best Retail Site of 2022
            </h4>
            <p className="tagLine">We don't follow trends, we set them.</p>

            <div className=" btnContainer ">
              <Button
                onClick={() => navigate("/items")}
                onTouchStart={() => navigate("/items")}
                className="shopBtn text-center "
                variant="dark"
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="image-container col-lg-6">
            <img className="homeImg" src={homepageImg} alt="people"></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
