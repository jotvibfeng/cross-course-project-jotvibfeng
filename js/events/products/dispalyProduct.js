import { fetchProduct } from "../../api/products/fetchProduct.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderProduct } from "../../ui/common/products/renderProduct.js";

export async function displayProduct() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  if (!id) {
    return (location.href = "/");
  }

  try {
    const product = await fetchProduct(id);
    console.log(product);
    renderProduct("#loading-container", product);
  } catch (error) {
    console.error(error);
    displayMessage(
      "#loading-container",
      "error",
      "There was an error fetching the products"
    );
  }
}
