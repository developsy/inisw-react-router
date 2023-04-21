import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";

const Player = (props) => {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const song = props.songs.find((song) => song.id === id);
  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link className="menu" to="/songs">
            <span className="badge badge-secondary pointer"> X </span>&nbsp;&nbsp;
          </Link>
          <span className="title">{song.title}</span>
        </div>
        <div className="player">
          <Youtube videoId={song.youtube_link} opts={{ width: 320, height: 240, playerVars: { autoplay: 1 } }} />
        </div>
      </div>
    </div>
  );
};

export default Player;
