import { useParams } from "react-router";
import styles from "./Profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EditUserProfile, getUser } from "../../store";
import { AiOutlineUser } from "react-icons/ai";
import { CustomButton } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileType } from "../../types/index.type";

export const Profile = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);

  const { handleSubmit, setValue } = useForm<ProfileType>();

  const onSubmit: SubmitHandler<ProfileType> = (formData) => {
    dispatch(EditUserProfile({ id: Number(id), data: formData }));
    console.log(formData);
  };

  const username = user?.username ?? "Name";
  const email = user?.email ?? "Email";
  const phoneNumber = user?.profile?.phone ?? "Phone";
  const description = user?.profile?.description ?? "Description";
  const avatar = user?.profile?.avatar ?? <AiOutlineUser />;

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);

    // Устанавливаем значения по умолчанию при включении редактирования
    if (!isDisabled) {
      setValue("description", description);
      setValue("phone", phoneNumber);
      setValue("email", email);
    }
  };

  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [dispatch, id]);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__about}>
        <div className={styles.profile__image}>{avatar}</div>
        <form
          className={styles.profile__title}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Name: {username}</h2>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            value={description}
            disabled={isDisabled}
            placeholder="description"
            onChange={(e) => setValue("description", e.target.value)}
          />
          <label htmlFor="description">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            disabled={isDisabled}
            onChange={(e) => setValue("phone", e.target.value)}
          />
          <label htmlFor="description">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            disabled={isDisabled}
            onChange={(e) => setValue("email", e.target.value)}
          />
          {isDisabled ? (
            <CustomButton onClick={handleChange}>Изменить</CustomButton>
          ) : (
            <CustomButton type="submit">Сохранить</CustomButton>
          )}
        </form>
      </div>
    </div>
  );
};
