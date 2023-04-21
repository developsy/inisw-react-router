import React from "react";
import { Link, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const song = songs.find((song) => song.id === id);
  const full_link = `https://m.youtube.com/watch?v=${song.youtube_link}`;
  return (
    <div className="mt-5">
      <h2>{song.title}</h2>
      <p>Original Musician : {song.musician}</p>
      <p>
        <a href={full_link} target="new">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
