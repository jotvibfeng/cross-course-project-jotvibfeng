const addToCartLinks = document.querySelectorAll(".add-to-cart");

addToCartLinks.forEach((link) => {
  link.addEventListener("click", addToCart);
});

function addToCart(event) {
  const gameInfo = event.currentTarget.closest(".game-info");
  const title = gameInfo.querySelector(".game-title").textContent;
  const price = parseFloat(gameInfo.querySelector(".game-price").textContent);

  const game = {
    title: title,
    price: price,
  };

  addToCartFunction(game);

  event.preventDefault();
}

function addToCartFunction(game) {
  console.log("Adding game to cart:", game);
}
