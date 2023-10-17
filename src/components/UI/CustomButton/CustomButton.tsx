import styles from './CustomButton.module.scss';

interface CustomButtonProps {
    children: React.ReactNode;
    type?: "submit"
 }

export const CustomButton: React.FC<CustomButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={styles.customButton}>
        {children}
    </button>
  )
}
