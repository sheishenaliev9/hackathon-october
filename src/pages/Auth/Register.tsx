import { useAppDispatch } from "../../hooks";
import { addUser } from "../../store";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import styles from "./Auth.module.scss";
import { Inputs } from "../../types/index.type";

export const Auth = () => {
  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const actionResult = await dispatch(addUser(data));
      
      const user = actionResult.payload;
  
      if (user && user.id) {
        navigate(`/profile/${user.id}`);
      } else {
        console.error("Не удалось получить ID пользователя после регистрации");
      }
    } catch (error) {
      console.error("Ошибка при регистрации", error);
    }
  };
  

  return (
    <div className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <input
          className={errors.username ? styles.errorInput : styles.form__input}
          type="username"
          placeholder="Имя"
          {...register("username", { required: true, minLength: 5 })}
        />
        {errors.username?.type === "minLength" && (
          <span className={styles.error}>
            Имя должно содержать не менее 5 символов
          </span>
        )}

        <input
          className={errors.email ? styles.errorInput : styles.form__input}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
          })}
        />
        {errors.email?.type === "pattern" && (
          <span className={styles.error}>
            Введите правильный адрес электронной почты
          </span>
        )}

        <div className={styles.passwordBlock}>
          <input
            className={errors.password ? styles.errorInput : styles.form__input}
            type={eye ? "text" : "password"}
            placeholder="Пароль"
            {...register("password", { required: true, minLength: 8 })}
          />
          {eye ? (
            <AiFillEye onClick={() => setEye(!eye)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setEye(!eye)} />
          )}
        </div>
        {errors.password?.type === "minLength" && (
          <span className={styles.error}>
            Пароль должен содержать не менее 8 символов
          </span>
        )}

        <CustomButton type="submit">Зарегистрироваться</CustomButton>
        <p className={styles.loginLink}>
          Если у вас уже имеется аккаунт:{" "}
          <span>
            <NavLink to="/login">Войти</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};
