import { displayProduct } from "./events/products/dispalyProduct.js";
import { displayProducts } from "./events/products/displayProducts.js";

const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayProducts();
    break;
  case "/product.html":
    displayProduct();
    break;
}

// import { BASE_URL } from "./constant/api.js";

// async function getGamehub(name) {
//   try {
//     const response = await fetch(BASE_URL);
//     const json = await response.json();
//     console.log(json);

//     console.log(json);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getGamehub();
