import { useAppDispatch } from "../../hooks";
import { addUser } from "../../store";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "../../components";
import styles from "./Auth.module.scss";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addUser(data));
  };

  return (
    <div className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <input
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

        <input
          type="password"
          placeholder="Пароль"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password?.type === "minLength" && (
          <span className={styles.error}>
            Пароль должен содержать не менее 8 символов
          </span>
        )}

        <input
          type="password"
          placeholder="Подтвердите пароль"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword?.type === "required" && (
          <span className={styles.error}>Подтвердите пароль</span>
        )}
        {getValues("password") !== getValues("confirmPassword") && (
          <span className={styles.error}>Пароли не совпадают</span>
        )}

        {/* {Object.keys(errors).length > 0 && (
          <span className={styles.error}>Заполните все поля</span>
        )} */}

        <CustomButton type="submit">Зарегистрироваться</CustomButton>
      </form>
    </div>
  );
};
