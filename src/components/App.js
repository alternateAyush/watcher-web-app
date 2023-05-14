import { useState } from "react";
import { getMeals } from "../apis";
import { Home } from "../pages";
import { Loader } from "./";
import appLogo from "../images/bibimbap.png";
import "../styles/styles.css";

function App() {
  const [loader, setLoader] = useState(false);
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  function handleClick(e) {
    setLoader(true);
    e.preventDefault();
    const fetchPosts = async () => {
      const response = await getMeals(query);
      if (response.success) {
        setMeals(response.data.hits);
        setLoader(false);
      }
    };
    fetchPosts();
  }
  return (
    <div className="App">
      <div className="searchBar">
        <div className="appLogo">
          <img className="appImg" src={appLogo} alt="" />
          <span className="appName">Find My Recipe</span>
        </div>
        <div className="searchContainer">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {loader ? <Loader /> : <Home meals={meals} />}
    </div>
  );
}

export default App;
