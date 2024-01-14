import React, { useState } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average }) => {
  const [movieInfoView, setMovieInfoView] = useState("none");

  return (
    <div className="Movie-container">
      <div
        className="Movie-img"
        onMouseEnter={() => setMovieInfoView("block")}
        onMouseLeave={() => setMovieInfoView("none")}>
        <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
        <div
          className="Movie-img-opacity"
          style={{
            backgroundColor:
              movieInfoView === "block" ? "rgba(0, 0, 0, 0.3)" : "",
          }}></div>
        <div className="Movie-info" style={{ display: `${movieInfoView}` }}>
          <h4>{title}</h4>
          <span>⭐️{vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
