import { Link } from "react-router-dom";
import logo from "../../assets/idea-logo.svg";
import styles from "./Header.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { useAppSelector } from "../../hooks";

export const Header = () => {
  const { user } = useAppSelector((state) => state.users);

  const handleContactsClick = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <Link to="/" onClick={handleContactsClick}>
              Контакты
            </Link>
          </nav>

          <div className={styles.registration}>
            <Link to={user && user.id ? `/profile/${user.id}` : "/register"}>
              <FaUserAlt className={styles.profile_icon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
