import { useEffect, useState } from "react";
import { MealCard, Loader } from "../components";
import styles from "../styles/mealCard.module.css";
import { getMeals } from "../apis/index";

const Home = ({ query,setRecipe}) => {
  const [loader, setLoader] = useState(true);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getMeals(query);
      if (response.success) {
        setMeals(response.data.hits);
      }
      setLoader(false);
    };
    fetchPosts();
    
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className={styles.mealsList}>
      {meals.map((meal) => {
        return <MealCard meal={meal} setRecipe={setRecipe} key={`meal-${meal.recipe.uri}`} />;
      })}
    </div>
  );
};

export default Home;
