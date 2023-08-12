import styles from "../styles/mealCard.module.css";
import { Recipe } from "../pages";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MealCard = ({ meal ,setRecipe}) => {
  function handleClick(){
    setRecipe(meal.recipe);
  }
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        alt="not found"
        src={meal.recipe.image}
      />
      <span className={styles.cardTitle}>{meal.recipe.label}</span>
      <Link to='/recipe-detail' className={styles.cardButton} onClick={handleClick} >
        Show Recipe
      </Link>
    </div>
  );
};

export default MealCard;
