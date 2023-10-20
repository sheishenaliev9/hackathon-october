import { FormEvent } from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  type?: "submit";
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.customButton}>
      {children}
    </button>
  );
};
