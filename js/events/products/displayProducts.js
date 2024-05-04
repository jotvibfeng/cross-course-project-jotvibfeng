import { fetchProducts } from "../../api/products/fetchProducts.js";

export async function displayProducts() {
  console.log("displayProducts");
  const products = await fetchProducts();
  console.log(products);
}
