import { useEffect } from "react";
import styles from "./Ideas.module.scss";
import { getIdeas } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IdeasType } from "../../types/index.type";

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

      <div className={styles.ideasList}>
        {ideas.map((idea: IdeasType) => (
          <IdeaItem key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
};

interface IdeaProps {
  idea: IdeasType;
}

export const IdeaItem: React.FC<IdeaProps> = ({ idea }) => {
  const { title, content } = idea;

  return (
    <div className={styles.idea}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
