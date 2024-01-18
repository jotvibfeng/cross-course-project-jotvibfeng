import { url } from "./const.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const detailUrl = `${url}/${id}`;

async function getGamehub() {
  try {
    const loadingContainer = document.querySelector("#loading");
    const response = await fetch(detailUrl);
    const details = await response.json();

    loadingContainer.innerHTML = "";

    const detailContainer = document.querySelector("#detail-container");

    detailContainer.innerHTML = `<div class="detail-card">
                               <h1 class="detail-title">${details.title}</h1>
                               <h2 class="sec-title">Playbox</h2>
                               <img
                               src="${details.image}"
                               alt="Cover of ${details.title} on detail page"
                               class="detail-image"
                             />
                             <svg
                               class="rate"
                               viewBox="0 0 149 25"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                            >
                        <path
            d="M5.52746 23.9339L7.30085 15.8639L7.36282 15.5819L7.14955 15.3873L1.17433 9.93425L9.0455 9.21503L9.35005 9.1872L9.464 8.9034L12.5 1.34193L15.536 8.9034L15.65 9.1872L15.9545 9.21503L23.8257 9.93425L17.8505 15.3873L17.6372 15.5819L17.6992 15.8639L19.4725 23.9339L12.768 19.6766L12.5 19.5064L12.232 19.6766L5.52746 23.9339Z"
            fill="#FCF200"
            stroke="black"
          />
          <path
            d="M36.5275 23.9339L38.3008 15.8639L38.3628 15.5819L38.1495 15.3873L32.1743 9.93425L40.0455 9.21503L40.35 9.1872L40.464 8.9034L43.5 1.34193L46.536 8.9034L46.65 9.1872L46.9545 9.21503L54.8257 9.93425L48.8505 15.3873L48.6372 15.5819L48.6992 15.8639L50.4725 23.9339L43.768 19.6766L43.5 19.5064L43.232 19.6766L36.5275 23.9339Z"
            fill="#FCF200"
            stroke="black"
          />
          <path
            d="M67.5275 23.9339L69.3008 15.8639L69.3628 15.5819L69.1495 15.3873L63.1743 9.93425L71.0455 9.21503L71.35 9.1872L71.464 8.9034L74.5 1.34193L77.536 8.9034L77.65 9.1872L77.9545 9.21503L85.8257 9.93425L79.8505 15.3873L79.6372 15.5819L79.6992 15.8639L81.4725 23.9339L74.768 19.6766L74.5 19.5064L74.232 19.6766L67.5275 23.9339Z"
            fill="#FCF200"
            stroke="black"
          />
          <path
            d="M98.5275 23.9339L100.301 15.8639L100.363 15.5819L100.15 15.3873L94.1743 9.93425L102.045 9.21503L102.35 9.1872L102.464 8.9034L105.5 1.34193L108.536 8.9034L108.65 9.1872L108.955 9.21503L116.826 9.93425L110.85 15.3873L110.637 15.5819L110.699 15.8639L112.473 23.9339L105.768 19.6766L105.5 19.5064L105.232 19.6766L98.5275 23.9339Z"
            fill="#FCF200"
            stroke="black"
          />
          <path
            d="M129.527 23.9339L131.301 15.8639L131.363 15.5819L131.15 15.3873L125.174 9.93425L133.045 9.21503L133.35 9.1872L133.464 8.9034L136.5 1.34193L139.536 8.9034L139.65 9.1872L139.955 9.21503L147.826 9.93425L141.85 15.3873L141.637 15.5819L141.699 15.8639L143.473 23.9339L136.768 19.6766L136.5 19.5064L136.232 19.6766L129.527 23.9339Z"
            fill="#FCF200"
            stroke="black"
          />
        </svg>
                             <div class="nav-add">
                              <h1 class="add-price">${details.price}$</h1>
                              <h2 class="add-ship">Free shipping</h2>
                              <a href="cart.html?id=${details.id}">
                               <h3 class="add-cart">Add to cart</h3>
                              </a>
                             </div>
                             <div class="nav-spec">
                             <h1 class="spec-title">Specifications</h1>
                             <div class="close-item">
                               <h2 class="spec-head">Genreal</h2>
                               <div class="spec-des">
                                 <h2 class="spec-genre">Genre</h2>
                                 <h2 class="spec-platform">Platform</h2>
                                 <h2 class="spec-esrb">ESRB</h2>
                                 <h2 class="spec-pegi">PEGI</h2>
                                 <h2 class="spec-released">released</h2>
                                 <h2 class="spec-multi">Multiplayer</h2>
                               </div>
                               <div class="spec-info">
                                 <h2 class="spec-sport">${details.genre}</h2>
                                 <h2 class="spec-play">Playbox</h2>
                                 <h2 class="spec-for">Everyone</h2>
                                 <h2 class="spec-age">${details.ageRating}</h2>
                                 <h2 class="spec-num">1-2</h2>
                                 <h2 class="spec-resleased">${details.released}</h2>
                               </div>
                             </div>
                           </div>
                     
                           <div class="close-info">
                             <h1 class="close-producte-title">Product Info</h1>
                             <div class="close-producte">
                               <h1 class="close-game-title">${details.title}</h1>
                               <p>
                                 ${details.description}
                               </p>
                             </div>
                           </div>
                             </div>`;
  } catch (error) {
    console.log(error);
    const detailContainer = document.querySelector("#detail-container");
    detailContainer.innerHTML =
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
