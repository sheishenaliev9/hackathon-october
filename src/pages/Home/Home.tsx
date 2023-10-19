import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__inner}>
        <div className={styles.home__title}>
          <h1>Онлайн платформа мастерская идей</h1>
        </div>

        <div className={styles.about__block}>
          <h2>Кратко о платформе</h2>
            
        </div>
      </div>
    </div>
  );
};
