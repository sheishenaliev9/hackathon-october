import { RiImageAddLine } from 'react-icons/ri';
import styles from "./CreateIdea.module.scss";

export const CreateIdea = () => {
  return (
    <div className={styles.createIdea}>
      <form className={styles.createIdea__form}>
        <h2>Создай свою идею</h2>
        <label htmlFor="image" className={styles.form__image}>
          Image <RiImageAddLine />
          <input type="file" id="image" />
        </label>
        <input
          className={styles.form__title}
          type="text"
          placeholder="Title"
        />
        <label htmlFor="content">Content</label>
        <textarea placeholder="content" id="content" />
      </form>
    </div>
  );
};
