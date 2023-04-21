import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const from = location.state && location.state.from ? location.state.from : "";
  return (
    <div className="card card-body">
      <h2>Home</h2>
      {from}
    </div>
  );
};

export default Home;
