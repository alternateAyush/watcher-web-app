import { SearchBar } from "../components";
import styles from '../styles/searchBar.module.css';
import foodPot from '../images/food-pot.png';
import panToss from '../images/pan-toss.png';

const Welcome = ({ setQuery }) => {
  return (
    <div className={styles.welcome}>
      <img className={styles.recipeBook} src={foodPot} alt=''/>
      <img className={styles.panToss} src={panToss} alt=''/>
      <SearchBar setQuery={setQuery} />
    </div>
  );
};

export default Welcome;
