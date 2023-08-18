import classes from './MyButton.module.css';

export default function MyButton({ children, ...props }) {
  return (
    <button type="button" {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}
