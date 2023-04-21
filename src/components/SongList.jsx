import React from "react";
import { Link } from "react-router-dom";

//Link 태그는 상세정보를 의미하기에(유튜브 영상의 고유 아이디) 동적으로 바뀌어야 함.
const SongList = ({ songs }) => {
  let list = songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`}>
          {song.title} (original musician : {song.musician})
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h2 className="m-5">Song List</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
