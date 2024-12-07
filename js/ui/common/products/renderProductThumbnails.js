export function renderProductThumbnails(targetElement, products) {
  const element = document.querySelector(targetElement);
  element.innerHTML = "";

  const thumbnailHtml = products.map(function (product) {
    return createHtmlForProductThumbnail(product);
  });

  console.log(thumbnailHtml);
  element.append(...thumbnailHtml);
}

function createHtmlForProductThumbnail(product) {
  const src = product.images[0].thumbnail;
  const alt = product.images[0].alt;

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;

  // const productItem = document.createElement("a");
  // productItem.classList.add("product");
  // productItem.setAttribute("href", `product.html?id=${id}`);
  // const title = document.createElement("h4");
  // title.innerText = name;
  // productItem.appendChild(title);
  // return productItem;
}
