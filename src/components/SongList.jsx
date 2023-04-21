import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";

//Link 태그는 상세정보를 의미하기에(유튜브 영상의 고유 아이디) 동적으로 바뀌어야 함.
const SongList = ({ songs }) => {
  const pathMatch = useMatch("/songs/:id");
  let param_id = pathMatch ? parseInt(pathMatch.params.id, 10) : -1;
  let list = songs.map((song) => {
    let cn = "list-group-item";
    cn += param_id === song.id ? " list-group-item-success" : "";

    return (
      <li className={cn} key={song.id}>
        <Link to={`/songs/${song.id}`}>
          {song.title} (original musician : {song.musician})
          <span className="float-right badge badge-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });

  //outlet이 있어야
  return (
    <div>
      <h2 className="m-5">Song List</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

export default SongList;
