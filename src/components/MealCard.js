import styles from "../styles/mealCard.module.css";
import { Recipe } from "../pages";

const MealCard = ({ meal }) => {
  function handleClick() {
    return <Recipe />;
  }
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        alt="image not found"
        src={meal.recipe.image}
      />
      <span className={styles.cardTitle}>{meal.recipe.label}</span>
      <span className={styles.cardButton} onClick={handleClick}>
        Show Recipe
      </span>
    </div>
  );
};

export default MealCard;
