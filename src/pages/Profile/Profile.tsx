import { useNavigate, useParams } from "react-router";
import styles from "./Profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EditUserProfile, getUser, logOut } from "../../store";
import { AiOutlineUser } from "react-icons/ai";
import { CustomButton } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileType, UserType } from "../../types/index.type";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);

  const { handleSubmit, setValue } = useForm<ProfileType>();

  const onSubmit: SubmitHandler<ProfileType> = async (formData) => {
    const updatedProfile = {
      ...(user?.profile || {}),
      ...formData,
    };

    const { id, email, ...profileWithoutId } = updatedProfile;

    await dispatch(
      EditUserProfile({
        id: Number(id),
        data: {
          profile: profileWithoutId,
          user: user?.profile?.user,
          email: email || "", // если email не определен, устанавливаем значение по умолчанию
        },
      })
    );
    console.log(profileWithoutId);
  };

  // const username = user?.username ?? "Name";
  // const email = user?.email ?? "Email";
  // const phoneNumber = user?.profile?.phone ?? "Phone";
  // const description = user?.profile?.description ?? "Description";
  // const avatar = user?.profile?.avatar ?? <AiOutlineUser />;

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);

    if (!isDisabled) {
      setValue("description", user?.profile?.description);
      setValue("phone", user?.profile?.phone);
      setValue("email", user?.profile?.email);
      setValue("user", user?.profile?.user);
    }
  };

  const handleLogOut = () => {
    dispatch(logOut({} as UserType));
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
            onChange={(e) => setValue("description", e.target.value)}
          />
          <label htmlFor="description">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            defaultValue={user?.profile?.phone}
            disabled={isDisabled}
            onChange={(e) => setValue("phone", e.target.value)}
          />
          <label htmlFor="description">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={user?.profile?.email}
            disabled={isDisabled}
            onChange={(e) => setValue("email", e.target.value)}
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

        <Link to="/createidea">Создать идею</Link>
      </div>
    </div>
  );
};
