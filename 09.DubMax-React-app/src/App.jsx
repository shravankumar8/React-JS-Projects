import { useState, useEffect } from "react";
import "./App.css";
import { fetchdatafromapi } from "../src/utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiCnfiguratuon } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  
  useEffect(() => {
    apitesting();
  }, []);

  const apitesting = () => {
    fetchdatafromapi("/movie/popular")
      .then((res) => {
        dispatch(getApiCnfiguratuon(res));
      })

      .catch((err) => {
        console.log("error fetching the movie data ", err);
      });
  };
console.log(url)

return (
  <div className="app">
    <p>{url.total_pages}</p>
  </div>
);

}

export default App;
