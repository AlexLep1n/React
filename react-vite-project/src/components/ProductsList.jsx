import { useDispatch, useSelector } from "react-redux";
import { changeAvailable, deleteProduct } from "../reducers/productsSlice";

export default function ProductsList() {
  const products = useSelector((state) => state.products.array);
  const dispatch = useDispatch();
  return (
    <>
      {products.map((product) => (
        <div key={product.id} style={{ display: "flex", gap: "20px" }}>
          <p>ID: {product.id}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available: {product.available}</p>
          <button onClick={() => dispatch(changeAvailable(product))}>
            Change available
          </button>
          <button onClick={() => dispatch(deleteProduct(product))}>
            Delete product
          </button>
        </div>
      ))}
    </>
  );
}
