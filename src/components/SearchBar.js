import styles from '../styles/searchBar.module.css';
import { Link } from "react-router-dom";
import search from '../images/search.png';

const SearchBar = ({setQuery})=>{    
    return <div className={styles.searchContainer}>
    <input
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
    <Link className={styles.searchContainerLink} to='/recipe-list'><img alt = 'Search' src = {search}/></Link>
  </div>
}

export default SearchBar;