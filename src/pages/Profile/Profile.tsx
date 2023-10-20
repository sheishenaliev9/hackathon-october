import { useNavigate, useParams } from "react-router";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EditUserProfile, getUser, logOut } from "../../store";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import { CustomButton } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileType } from "../../types/index.type";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);

  const { handleSubmit, setValue } = useForm<ProfileType>();

  const onSubmit: SubmitHandler<ProfileType> = async (formData) => {
    const updatedProfileData = {
      user: user?.profile?.user,
      description: formData.profile.description || user?.profile?.description,
      phone: formData.profile.phone || user?.profile?.phone,
      email: formData.profile.email || user?.email,
    };

    await dispatch(
      EditUserProfile({
        id: Number(id),
        data: updatedProfileData,
      })
    );
  };

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);

    if (!isDisabled) {
      setValue("profile.description", user?.profile?.description);
      setValue("profile.phone", user?.profile?.phone);
      setValue("profile.email", user?.email);
    }
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [dispatch, id]);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__about}>
        <div className={styles.profile__image}>
          {!user?.profile?.avatar ? <AiOutlineUser /> : user?.profile?.avatar}
        </div>
        <form
          className={styles.profile__title}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Name: {user.username}</h2>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            defaultValue={user?.profile?.description}
            disabled={isDisabled}
            placeholder="description"
            onChange={(e) => setValue("profile.description", e.target.value)}
          />
          <label htmlFor="description">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            defaultValue={user?.profile?.phone}
            disabled={isDisabled}
            onChange={(e) => setValue("profile.phone", e.target.value)}
          />
          <label htmlFor="description">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={user?.email}
            disabled={isDisabled}
            onChange={(e) => setValue("profile.email", e.target.value)}
          />
          <div className={styles.profile__actions}>
            {isDisabled ? (
              <CustomButton onClick={handleChange}>Изменить</CustomButton>
            ) : (
              <CustomButton type="submit">Сохранить</CustomButton>
            )}
            <button
              className={styles.profile__actions__logout}
              onClick={handleLogOut}
            >
              Выйти
            </button>
          </div>
        </form>

        <button className={styles.createIdea}>
          <Link to="/createidea">
            <span>Создать идею</span> <AiOutlineArrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
};
