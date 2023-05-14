import { MealCard } from "../components";
import styles from "../styles/mealCard.module.css";

const Home = ({ meals }) => {
  return (
    <div className={styles.mealsList}>
      {meals.map((meal) => {
        return <MealCard meal={meal} key={`meal-${meal.recipe.uri}`} />;
      })}
    </div>
  );
};

export default Home;
