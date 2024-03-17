import { url } from "./const.js";

async function getGamehub() {
  try {
    const response = await fetch(url);
    const gamehub = await response.json();

    const gamehubContainer = document.querySelector("#gamehub-container");
    const loadingContainer = document.querySelector("#loading-container");

    gamehub.forEach(function (game) {
      gamehubContainer.innerHTML += `<div class="gamehub-container">
                                     <a href="detail.html">
                                      <img
                                        src="${game.image}"
                                        class="product-image"
                                        alt="The cover of ${game.title}"
                                      />
                                     </a>
                                     <div class="game-info" >
                                        <h3 class="game-title">${game.title}</h3>
                                        <h3 class="game-price">${game.price}$</h3>
                                     <div class="action-button">
                                        <a href="cart.html?id=${game.id}" class="add-to-cart">
                                          <h3 class="add">Add to cart</h3>
                                        </a>
                                     </div>
                                    </div>
                                    <div class="detail-button">
                                      <a href="detail.html?id=${game.id}">
                                        <h3 class="detail">Detail</h3>
                                      </a>
                                    </div>

                                  </div>`;
    });
  } catch (error) {
    const gamehubContainer = document.querySelector("#gamehub-container");
    gamehubContainer.innerHTML =
      '<div class="error"> An error arccured when calling this gamehub API</div>';
  }
}

getGamehub();
