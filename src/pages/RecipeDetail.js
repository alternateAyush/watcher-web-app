import styles from "../styles/recipeDetail.module.css";

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.label}</h1>
      <h3>Health Lables</h3>
      {recipe.healthLabels.map((hLabel) => {
        return <span> {hLabel} </span>;
      })}
      <h3>Cautions</h3>
      {recipe.cautions.map((caution) => {
        return <span> {caution} </span>;
      })}
      <h3>Ingredients</h3>
      {recipe.ingredients.map((ingredient) => {
        return <div>
            <h5> {ingredient.food} </h5>
            <p>{ingredient.foodCategory}</p>
            <p>{ingredient.text}</p>
            <p>{ingredient.image}</p>
        </div>;
      })}
    </div>
    
  );
};

export default RecipeDetail;
