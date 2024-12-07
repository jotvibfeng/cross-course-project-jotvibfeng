import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderProductThumbnails } from "../../ui/common/products/renderProductThumbnails.js";
import { renderProducts } from "../../ui/common/products/renderProducts.js";

export async function displayProducts() {
  console.log("displayProducts");
  try {
    const products = await fetchProducts();
    console.log(products);
    renderProducts("#loading-container", products);
    renderProductThumbnails("#thumbnails-container", products);
  } catch (error) {
    console.error(error);
    displayMessage(
      "#loading-container",
      "error",
      "There was an error fetching the products"
    );
  }
}
