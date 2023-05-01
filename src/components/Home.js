import { Badge, Image } from "react-bootstrap";
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
      <div className="container">
        <div className="home row">
          <div className="col xl-6  taglineContainer col-lg-6 px-5 col-md-12 ">
            <h4 className="tagLine tagLineTop   text-center text-muted">
              Voted Best Retail Site of 2022
            </h4>
            <p className="tagLine">We don't follow trends, we set them.</p>
            <Badge
              onClick={() => navigate("/items")}
              onTouchStart={() => navigate("/items")}
              className="rounded-pill mx-auto shopBtn"
              bg="dark"
            >
              Shop Now
            </Badge>
          </div>
          <div className="col-lg-6   col-md-6 col-sm-6">
            <Image className="homeImg" src={homepageImg} alt="people"></Image>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
