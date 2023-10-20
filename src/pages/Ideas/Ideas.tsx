import { useEffect, useState } from "react";
import { getIdeas } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IdeasType } from "../../types/index.type";
import { Link } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineArrowRight,
} from "react-icons/ai";
import imageNotFound from "../../assets/imageNotFoud.png";
import styles from "./Ideas.module.scss";
import { NotFound } from "../../components";

export const Ideas = () => {
  const [value, setValue] = useState<string>("");
  const [filteredIdeas, setFilteredIdeas] = useState<IdeasType[]>([]);
  const { ideas } = useAppSelector((state) => state.ideas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIdeas());
    console.log(ideas);
  }, [dispatch]);

  useEffect(() => {
    const newFilteredIdeas = ideas.filter((idea) => {
      return idea.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredIdeas(newFilteredIdeas);
  }, [ideas, value]);

  if (!ideas || ideas.length === 0) {
    return <NotFound />;
  }

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div className={styles.ideas}>
      <div className={styles.ideas__search}>
        <input
          type="text"
          value={value}
          onChange={handleSearch}
          placeholder="Search"
        />
      </div>

      <div className={styles.ideasList}>
        {filteredIdeas.length === 0 ? (
          <NotFound />
        ) : (
          filteredIdeas.map((idea: IdeasType) => (
            <IdeaItem key={idea.id} idea={idea} />
          ))
        )}
      </div>
    </div>
  );
};

interface IdeaProps {
  idea: IdeasType;
}

export const IdeaItem: React.FC<IdeaProps> = ({ idea }) => {
  const { title, photo, views, id, like, dislike } = idea;

  return (
    <div className={styles.idea}>
      <div className={styles.idea__image}>
        {photo ? (
          <img src={photo} alt="" />
        ) : (
          <img src={imageNotFound} alt="" />
        )}
      </div>

      <div className={styles.idea__content}>
        <div className={styles.idea__title}>
          <h2>{title}</h2>
          <Link to={`/ideas/${id}`}>
            <button>
              <span>Перейти</span> <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
        <div className={styles.idea__actions}>
          <p>{views} просмотров</p>
          <div>
            <AiOutlineLike />
            <p>{like}</p>
            <AiOutlineDislike />
            <p>{dislike}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
