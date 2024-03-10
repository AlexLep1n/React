import "./App.css";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ProductsList />
    </section>
  );
}
