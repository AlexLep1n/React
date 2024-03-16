import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducers/productsSlice";
import { useState } from "react";

export default function EditProductForm() {
  const products = useSelector((state) => state.products.array);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    available: "",
  });

  function clickHandler(e) {
    const inputs = e.target.closest("section").querySelectorAll("input");
    [...inputs].forEach((input) => (input.value = ""));
    dispatch(updateProduct(product));
  }

  function availableCheck(e) {
    e.target.value.trim() === "yes" || e.target.value.trim() === "no"
      ? setProduct({ ...product, available: e.target.value })
      : setProduct({ ...product, available: "no" });
  }

  function checkId(e) {
    if (!products.some((product) => product.id === Number(e.target.value))) {
      return;
    }
    setProduct({ ...product, id: Number(e.target.value) });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <h3>Edit Product</h3>
      <label htmlFor="name">ID </label>
      <input id="name" type="text" onChange={(e) => checkId(e)} />
      <label htmlFor="name">Name </label>
      <input
        id="name"
        type="text"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <label htmlFor="description">Description </label>
      <input
        id="description"
        type="text"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <label htmlFor="price">Price </label>
      <input
        id="price"
        type="text"
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
      />
      <label htmlFor="available">Available </label>
      <input id="available" type="text" onChange={(e) => availableCheck(e)} />
      <button onClick={(e) => clickHandler(e)}>Edit product</button>
    </div>
  );
}
