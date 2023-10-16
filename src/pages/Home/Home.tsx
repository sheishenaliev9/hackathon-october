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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut nihil quo voluptatem magnam nam sapiente. Nulla vitae ratione mollitia. Dicta nostrum corporis excepturi, ratione commodi quos iure consequuntur accusamus rem dolorem magnam cumque eum praesentium quo illum consequatur odit quam. Molestiae quasi officiis inventore alias vero nihil itaque adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};
