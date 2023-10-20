import { TbError404 } from "react-icons/tb";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <TbError404 />
      <h3>Not Found</h3>
    </div>
  );
};
