import { RiImageAddLine } from "react-icons/ri";
import styles from "./CreateIdea.module.scss";
import { CustomButton } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useForm } from "react-hook-form";
import { createIdea } from "../../store";
import { createIdeaType } from "../../types/index.type";

export const CreateIdea = () => {
  const { register, handleSubmit, reset } = useForm<createIdeaType>();

  const { user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: createIdeaType) => {
    try {
      const formData = new FormData();
      formData.append("user", String(user.id));
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image[0]);

      await dispatch(createIdea(formData));

      // Reset the form after successful submission
      reset();

    } catch (error) {
      console.error("Error creating idea:", error);
    }
  };

  return (
    <div className={styles.createIdea}>
      <form
        className={styles.createIdea__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Создай свою идею</h2>
        <label htmlFor="image" className={styles.form__image}>
          Image <RiImageAddLine />
          <input type="file" id="image" {...register("image")} />
        </label>
        <input
          className={styles.form__title}
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <label htmlFor="content">Content</label>
        <textarea placeholder="content" id="content" {...register("content")} />
        <CustomButton type="submit">Созадать</CustomButton>
      </form>
    </div>
  );
};
