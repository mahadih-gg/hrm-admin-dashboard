import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <Row>
          <Col sm={6}>
            {currentYear} &copy; All Rights Reserved to <Link to="https://publicitix.com/" target="_blank">Publicitix</Link>
          </Col>

          <Col sm={6}>
            <div className="text-sm-end footer-links d-none d-sm-block">
              <Link to="/">About Us</Link>
              <Link to="/">Help</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;