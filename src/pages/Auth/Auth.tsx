import { useAppDispatch } from "../../hooks";
import { addUser } from "../../store";
import { UserType } from "../../types/index.type";
import styles from "./Auth.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "../../components";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addUser(data));
  };

  const dispatch = useAppDispatch();

  return (
    <div className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <input
          type="username"
          placeholder="Имя"
          {...register("username", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Пароль"
          {...register("password", { required: true })}
        />
        <input type="password" placeholder="Подвердите пароль" />
        <CustomButton type="submit">Зарегистрироваться</CustomButton>
      </form>
    </div>
  );
};
