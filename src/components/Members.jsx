import React from "react";
import { useNavigate } from "react-router-dom";

const Members = (props) => {
  //훅은 주로 함수의 가장 앞부분에서 호출하는게 좋음
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("정말로 홈으로 이동할까요?")) {
      navigate("/", { state: { from: "/members" } });
    }
  };
  let imgstyle = { width: 90, height: 80 };
  let list = props.members.map((member) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3" key={member.name}>
        <img src={member.photo} className="img-thumbnail" alt={member.name} style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-primary" onClick={goHome}>
        go home
      </button>
    </div>
  );
};

export default Members;
