import appLogo from "../images/bibimbap.png";
import styles from '../styles/navBar.module.css';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return <div className={styles.navBar}>
    <div className={styles.appLogo}>
      <img className={styles.appImg} src={appLogo} alt="" />
      <span className={styles.appName}>Find My Recipe</span>
    </div> 
    <ul className={styles.navLinks}>
      <li>
        <Link to='/' className={styles.links}>Search</Link>
      </li>
      <li>
        <Link to='/about-us' className={styles.links}>About us</Link>
      </li>
    </ul>   
  </div>
}

export default Navbar;