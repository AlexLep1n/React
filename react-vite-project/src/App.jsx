import "./App.css";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "200px",
          marginBottom: "20px",
        }}
      >
        <AddProductForm />
        <EditProductForm />
      </div>
      <ProductsList />
    </section>
  );
}
