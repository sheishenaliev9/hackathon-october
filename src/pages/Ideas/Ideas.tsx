import { useEffect } from "react";
import styles from "./Ideas.module.scss";
import { getIdeas } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IdeasType } from "../../types/index.type";
import { Link } from "react-router-dom";

export const Ideas = () => {
  const { ideas } = useAppSelector((state) => state.ideas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIdeas());
    console.log(ideas);
  }, [dispatch]);

  if (!ideas || ideas.length === 0) {
    return <h1>error</h1>;
  }

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
  const { title, photo_1, views, id } = idea;

  return (
    <div className={styles.idea}>
      <Link to={`/ideas/${id}`}>
        <div className={styles.idea__image}>
          {photo_1 && <img src={photo_1} alt="" />}
        </div>

        <div className={styles.idea__title}>
          <h2>{title}</h2>
          <p>{views} просмотров</p>
        </div>
      </Link>
    </div>
  );
};
