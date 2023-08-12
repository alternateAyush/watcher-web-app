import { useState } from "react";

import { Home,RecipeDetail,Welcome,About } from "../pages";
import { Navbar} from "./";

import {Routes,Route} from 'react-router-dom';
import "../styles/styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState({});
  return (
    <div className="App">   
    <Navbar/>  
      <Routes>
        <Route path='/' element={<Welcome setQuery={setQuery}/>}></Route>
        <Route path='/recipe-list' element={<Home query={query} setRecipe={setRecipe}/>}></Route>
        <Route path='/recipe-detail' element={<RecipeDetail recipe={recipe}/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
