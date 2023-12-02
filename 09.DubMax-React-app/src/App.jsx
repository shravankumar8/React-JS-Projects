import { useState, useEffect } from "react";
import "./App.css";
import { fetchdatafromapi } from "../src/utils/api";
import { UseSelector, useDispatch } from "react-redux";
import { getApiCnfiguratuon } from "./store/homeSlice";
function App() {
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchdatafromapi("/movie/popular")
      .then((res) => {
        // console.log(res);
        setMovieData(res);
      })
      .catch((err) => {
        console.log("error fetching the movie data ", err);
      });
  };

  return (
    <div>
      {movieData ? (
        <div>
          h1
          {movieData.results.map((movie) => (
            <div key={movie.key}>
              {movie.title + " released in " + movie.release_date}
            </div>
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default App;
