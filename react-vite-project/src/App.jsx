import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ThemeSwitcher />
    </section>
  );
}
