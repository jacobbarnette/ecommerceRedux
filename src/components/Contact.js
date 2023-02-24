import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import Header from "./Header";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="contact home">
          <Container>
            <Row>
              <div className="socialIconContainer">
                <Col className="socialIcons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="socialIcon px-5"
                  >
                    <BsInstagram />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="socialIcon px-5"
                  >
                    <BsTwitter />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="socialIcon px-5"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="socialIcon px-5"
                  >
                    <BsSnapchat />
                  </a>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
