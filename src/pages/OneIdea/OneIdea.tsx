import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getIdea } from "../../store";
import styles from "./OneIdea.module.scss";
import imageNotFound from "../../assets/imageNotFoud.png";

export const OneIdea = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { idea } = useAppSelector((state) => state.ideas);
  const { title, photo, content, views } = idea;
  
  useEffect(() => {
    dispatch(getIdea(Number(id)));
  }, [dispatch, id]);

  return (
    <div className={styles.idea}>
      <div className={styles.idea__inner}>
      <div className={styles.idea__title}>
      {photo ? (
          <img src={photo} alt="" />
        ) : (
          <img src={imageNotFound} alt="" />
        )}
        <h2>{title}</h2>
      </div>

      <div className={styles.idea__content}>
        <p>{content}</p>
        <span>{views} просмотров</span>
      </div>
      </div>
    </div>
  );
};
