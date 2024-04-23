import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img src={logo} alt="Company Logo" className="img-fluid" style={{ maxWidth: "400px", maxHeight: "200px" }} />
      <Link to="/ProductPage" className="btn btn-primary mt-3">Proceed to Shopping</Link>
    </div>
  );

export default HomePage;
