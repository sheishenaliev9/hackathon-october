import ideaImg from "../../assets/ideaImg.png";
import { AiOutlineFileSearch, AiOutlineFileAdd } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__inner}>
        <div className={styles.home__title_block}>
          <div className={styles.title_block__title}>
            <h1>Онлайн платформа мастерская идей</h1>
            <p>
              Добро пожаловать! Мы - платформа для обмена творческими идеями,
              поиска соавторов и воплощения смелых проектов.
            </p>
          </div>
          <div className={styles.title_block__image}>
            <img src={ideaImg} alt="" />
          </div>
        </div>

        <div className={styles.about__block}>
          <div>
            <AiOutlineFileSearch />
            <p>Находите вдохновение.</p>
          </div>
          <div>
            <AiOutlineFileAdd />
            <p>Превращайте концепции.</p>
          </div>
          <div>
            <HiOutlineChatAlt2 />
            <p>Делитесь творчеством.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
