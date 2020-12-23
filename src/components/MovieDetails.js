import React, { useState, useEffect } from "react";
import { getMovieDetails } from "./../api/TMDB";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    getMovieDetails(props.location.movie_id, setCurrentMovie);
  }, []);

  const ImageURL =
    "https://image.tmdb.org/t/p/w500/" + currentMovie.poster_path;
  return (
    <div>
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              {currentMovie.poster_path != null ? (
                <img
                  src={ImageURL}
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              ) : (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              )}
              <span class="card-title">{currentMovie.original_title}</span>
            </div>
            <div class="card-content">
              <p>{currentMovie.overview}</p>
            </div>
            <div class="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
