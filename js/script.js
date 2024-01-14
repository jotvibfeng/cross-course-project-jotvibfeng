const url = "https://api.noroff.dev/api/v1/gamehub";

async function getGamehub() {
  try {
    const response = await fetch(url);
    const gamehub = await response.json();
    //console.log(response);

    const gamehubContainer = document.querySelector("#gamehub-container");
    const loadingContainer = document.querySelector("#loading");

    gamehub.forEach(function (game) {
      console.log(game);

      loadingContainer.innerHTML = "";

      gamehubContainer.innerHTML += `<div class="gamehub-container">
                                     <a href="detail.html">
                                      <img
                                        src="${game.image}"
                                        class="product-image"
                                        alt="The cover of ${game.title}"
                                      />
                                     </a>
                                     <div class="game-info">
                                        <h3 class="game-title">${game.title}</h3>
                                        <h3 class="game-price">${game.price}$</h3>
                                     </div>
                                     <div class="action-button">
                                        <a href="cart.html">
                                          <h3 class="add">Add to cart</h3>
                                        </a>
                                     </div>
                                    <div class="detail-button">
                                      <a href="detail.html?id=${game.id}">
                                        <h3 class="detail">Detail</h3>
                                      </a>
                                    </div>

                                  </div>`;
    });
  } catch (error) {
    console.log(error);
    const gamehubContainer = document.querySelector("#gamehub-container");
    gamehubContainer.innerHTML =
      '<div class="error"> An error arccured when calling this gamehub API</div>';
  }
}

getGamehub();

document.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementById("loading");

  window.addEventListener("load", function () {
    // Hide the loading indicator when the page has fully loaded
    loading.classList.add("loading-hidden");
  });

  // Simulate a delay or async operation
  setTimeout(() => {
    // Show the loading indicator
    loading.classList.remove("loading-hidden");
  });
});
