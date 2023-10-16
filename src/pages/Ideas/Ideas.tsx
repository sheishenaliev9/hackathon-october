import { useEffect } from "react";
import styles from "./Ideas.module.scss";
import { getIdeas } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Ideas = () => {
  const { ideas } = useAppSelector((state) => state.ideas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIdeas());
  }, [dispatch]);

  return (
    <div className={styles.ideas}>
      <div className={styles.ideas__search}>
        <input type="text" />
      </div>

      <div>
        {
          ideas.map((idea) => (
            <div>{idea.title}</div>
          ))
        }
      </div>
    </div>
  );
};
