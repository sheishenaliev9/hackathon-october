import { useEffect, useState } from "react";
import { getIdeas, choiceVoice } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IdeasType } from "../../types/index.type";
import { Link } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineArrowRight,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import styles from "./Ideas.module.scss";

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
    return <h1>error</h1>;
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
          <h2>No results found</h2>
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
  const { title, photo, views, id, like, dislike, voice } = idea;

  const dispatch = useAppDispatch();

  const voiceFunc = (isLike: boolean) => {
    dispatch(choiceVoice({ ...voice, id: Number(idea.id), choice: isLike }));
  };

  return (
    <div className={styles.idea}>
      <div className={styles.idea__image}>
        {photo ? <img src={photo} alt="" /> : <AiOutlineQuestionCircle />}
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
            <AiOutlineLike onClick={() => voiceFunc(true)} />
            <p>{like}</p>
            <AiOutlineDislike onClick={() => voiceFunc(false)} />
            <p>{dislike}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
