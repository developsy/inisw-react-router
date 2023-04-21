import React from "react";
import { Link } from "react-router-dom";

//리액트 라우터를 사용하면 link라는 컴포넌트를 사용할 수 있다. 해당 경로로 이동시킴.
const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">Foxes And Fossils</h2>
        <p>
          <a href="http://foxesandfossils.com">http://foxesandfossils.com</a>
        </p>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success menu" to="/">
              Home
            </Link>
            <Link className="btn btn-success menu" to="/about">
              About
            </Link>
            <Link className="btn btn-success menu" to="/members">
              Members
            </Link>
            <Link className="btn btn-success menu" to="/songs">
              Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
