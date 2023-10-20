import { useAppDispatch } from "../../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./Auth.module.scss";
import { useState } from "react";
import { loginUser } from "../../store";
import { Inputs } from "../../types/index.type";

export const Login = () => {
  const [eye, setEye] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const actionResult = await dispatch(loginUser(data));
      const user = actionResult.payload;

      console.log(user);

      if (user && user.id) {
        navigate(`/profile/${user.id}`);
      } else {
        console.error("Не удалось получить ID пользователя после входа");
      }
    } catch (error) {
      console.error("Ошибка при входе", error);
    }
  };

  return (
    <div className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Вход</h2>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Имя"
          {...register("username", { required: true, minLength: 5 })}
        />
        <div className={styles.passwordBlock}>
          <input
            className={styles.form__input}
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
        <CustomButton type="submit">Войти</CustomButton>
        <p className={styles.loginLink}>
          Если у вас уже еще нет аккаунта:{" "}
          <span>
            <NavLink to="/register">Зарегистрироваться</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};
