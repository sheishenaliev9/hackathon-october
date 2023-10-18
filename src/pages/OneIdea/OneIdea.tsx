import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getIdea } from "../../store";
import styles from './OneIdea.module.scss';

export const OneIdea = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { idea } = useAppSelector(state => state.ideas);
    const { title, photo_1, content, views } = idea;
    useEffect(() => {
        dispatch(getIdea(Number(id)));
    }, [dispatch]);

  return (
    <div className={styles.idea}>
        <div className={styles.idea__title}>
            <img src={photo_1} alt="photo" />
            <h2>{title}</h2>
        </div>

        <div className={styles.idea__content}>
            <p>{content}</p>
            <span>{views} просмотров</span>
        </div>
    </div>
  )
}
