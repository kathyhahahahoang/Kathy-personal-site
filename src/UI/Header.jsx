import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav className={styles["nav-container"]}>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          Kathy Hoang
        </NavLink>
        <div>
          <ul className={styles.about}>
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.link}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
