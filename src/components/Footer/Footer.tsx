import styles from "./Footer.module.scss";
import logo from "../../assets/idea-logo.svg";
import { AiFillInstagram, AiTwotonePhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__logo}>
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ex rerum, provident distinctio magnam culpa.
            </p>
          </div>

          <div className={styles.footer__contacts}>
            <h3>Наши контакты</h3>
            <div>
              <ul className={styles.contacts__list}>
                <li>
                  <a href="#">
                    <AiTwotonePhone /> +996-999-999
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram /> instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTelegram /> telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footer__questions}>
            <h3>Возникли вопросы?</h3>
            <p>Напишите нам на почту</p>
            <a href="#">example@gmail.com</a>
          </div>
        </div>
      </div>

      <div id="footer" className={styles.footer__under}>
        <div className="container">
          <div className={styles.under__inner}>
            <img src={logo} alt="logo" />
            <p>© 2023 Ideas workshop, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
