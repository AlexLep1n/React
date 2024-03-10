import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    array: [
      {
        id: 1,
        name: "Prod #1",
        description: "Description prod #1",
        price: 41,
        available: "yes",
      },
      {
        id: 2,
        name: "Prod #2",
        description: "Description prod #2",
        price: 57,
        available: "yes",
      },
      {
        id: 3,
        name: "Prod #3",
        description: "Description prod #3",
        price: 123,
        available: "no",
      },
    ],
  },
  reducers: {
    addProduct: (state, { payload: newProduct }) => {
      if (state.array.some((product) => product.id === newProduct.id)) {
        return;
      }
      state.array.push(newProduct);
    },
    deleteProduct: (state, { payload: deletedProduct }) => {
      state.array = state.array.filter(
        (product) => product.id !== deletedProduct.id
      );
    },
    changeAvailable: (state, { payload: editedProduct }) => {
      state.array.map((product) => {
        if (product.name === editedProduct.name) {
          return product.available === "yes"
            ? (product.available = "no")
            : (product.available = "yes");
        }
        return product;
      });
    },
    updateProduct: (state, { payload: updatedProduct }) => {
      state.array.map((product) =>
        product.id === updatedProduct.id ? (product = updatedProduct) : product
      );
    },
  },
});

export const { addProduct, deleteProduct, changeAvailable, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
