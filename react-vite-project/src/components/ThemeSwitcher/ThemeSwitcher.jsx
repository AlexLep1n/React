import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/themeSlice";
import classes from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const color = useSelector((store) => store.theme.color);
  const dispatch = useDispatch();

  return (
    <div className={classes.theme}>
      <div className={color === "light" ? classes.light : classes.dark}>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
          molestias!
        </p>
      </div>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{ width: "200px" }}
      >
        Switch theme
      </button>
    </div>
  );
}
