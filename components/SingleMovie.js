import React from "react";
import Link from "next/link"

function SingleMovie(props) {
  return (
    <Link href={"/movie/" + props.data.imdbID}>
      <div className="col">
        <div className="movie">
          <div className="cover">
            <img
              src={props.data.Poster}
              alt={"The Poster For:- " + props.data.Poster}
              style={{ maxHeight: "400px" }}
            />
          </div>
          <h1 className="movie-title">{props.data.Title}</h1>
          <p className="movie-year">Year: {props.data.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleMovie;
