/* eslint-disable react/prop-types */
import classes from "./Message.module.css";

export default function Message({ children }) {
  return <p className={classes.message}>{children}</p>;
}
