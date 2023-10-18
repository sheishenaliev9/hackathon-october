import { Link } from "react-router-dom";
import logo from "../../assets/idea-logo.svg";
import styles from "./Header.module.scss";
import { FaUserAlt } from 'react-icons/fa';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <img src={logo} alt="logo" />
          </div>

          <nav className={styles.header__nav}>
            <Link to="/">Главная</Link>
            <Link to="/ideas">Идеи</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">О нас</Link>
          </nav>

          <div className={styles.registration}>
            <Link to="/register">
              <FaUserAlt className={styles.profile_icon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
