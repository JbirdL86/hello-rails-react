import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome, greetings!</h1>
      <p>Please, click on the button below.</p>
      <Link to="/hello" className="btn btn-warning mx-3">Be greeted in different languages!</Link>
    </div>
  );
}

export default Home;