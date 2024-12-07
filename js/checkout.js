import { url } from "./const.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const heroDetailUrl = `${url}/${id}`;

async function getGamehub() {
  try {
    const response = await fetch(heroDetailUrl);
    const heroDetail = await response.json();

    const heroDetailContainer = document.querySelector(
      "#hero-detail-container"
    );
    heroDetailContainer.innerHTML = `
    <div class="hero-detail">
    <h1 class="del-detail">Detail</h1>
<h4 class="hero-total">Freight</h4>
<h4 class="hero-total">Total Amount</h4>
<h4 class="del-pay">0$</h4>
<h4 class="del-pay-1">${heroDetail.price}</h4>
<h4 class="del-game">${heroDetail.title}</h4>
<h4 class="del-game">Playbox</h4>
<a href="complett.html">
  <h4 class="check-pay">Pay</h4>
</a>
<img
  src="${heroDetail.image}"
  class="del-ping-pong"
  alt="Cover of ${heroDetail.title} in the checkout page"
/>
    </div>`;
  } catch (error) {
    console.log(error);
    const detailContainer = document.querySelector("#detail-container");
    detailContainer.innerHTML =
      '<div class="error"> An error arccured when calling this gamehub API</div>';
  }
}

getGamehub();
