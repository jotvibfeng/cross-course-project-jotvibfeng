export function renderProducts(targetElement, products) {
  const element = document.querySelector(targetElement);
  element.innerHTML = "";

  const productHtml = products.map(function (product) {
    return createHtmlForProduct(product);
  });

  console.log(productHtml);
  element.append(...productHtml);
}

function createHtmlForProduct(product) {
  const { name, id, price } = product;
  const productItem = document.createElement("a");
  productItem.classList.add("product");
  productItem.setAttribute("href", `product.html?id=${id}`);
  const title = document.createElement("h4");
  title.innerText = name;
  productItem.appendChild(title);

  return productItem;
}

async function fetchProduct(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

function getProductIdFromURL() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("id");
}

function displayProductDetails(product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent =
    product.description;
}

async function loadProductDetails() {
  const productId = getProductIdFromURL();
  if (!productId) {
    console.error("Product ID not found in URL");
    return;
  }

  try {
    const product = await fetchProduct(productId);
    displayProductDetails(product);
  } catch (error) {
    console.error("Failed to load product details", error);
  }
}

window.addEventListener("load", loadProductDetails);
