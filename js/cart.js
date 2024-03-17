import { url } from "./const.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const cartUrl = `${url}/${id}`;

async function getGamehub() {
  try {
    const response = await fetch(cartUrl);
    const cart = await response.json();

    const cartContainer = document.querySelector("#cart-container");
    cartContainer.innerHTML = `<div class="cart-container">
                                    <h1 class"shopping-title">Shopping cart</h1>
                                    <h2 class"title-order">Your order</h2>
                                    
                                    <div class="order-container">
                                    <img src="${cart.image}"
                                     class="order-image"
                                     alt="Picture of cover ${cart.title}"
                                     />
                                     <h4 class="game-title">${cart.title}</h4>
                                     <h6 class="console-order">Playbox</h6>
                                     <h6 class="del-time">Delivery time 1-2 days</h6>
                                     <h5 class="order-price">${cart.price}$</h5>
                                     <input type="number" class="number" inputmode="numeric" />
                                     <svg
                                     class="bin"
                                     viewBox="0 0 41 38"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                   >
                                     <ellipse cx="20.5" cy="19" rx="20.5" ry="19" fill="#D9D9D9" />
                                     <path
                                       d="M28 16.3337L26.9562 18.1462L14.2944 10.8125L15.3382 9L18.5115 10.8334L19.9311 10.4458L24.4509 13.065L24.8372 14.5003L28 16.3337ZM13 26.9047V14.3326H18.2923L25.5261 18.5233V26.9047C25.5261 27.4604 25.3061 27.9933 24.9146 28.3863C24.5231 28.7792 23.9921 29 23.4384 29H15.0877C14.534 29 14.003 28.7792 13.6115 28.3863C13.22 27.9933 13 27.4604 13 26.9047Z"
                                       fill="black"
                                     />
                                   </svg>
                                   <div class="checkout-container">
                                   <h6 class="item-cart">Items in the shopping cart</h6>
                                   <h6 class="cost-cart">Cost of freight</h6>
                                   <h6 class="price-item">${cart.price}$</h6>
                                   <h6 class="price-cost">0$</h6>
                                   <h5 class="total">Total Amount</h5>
                                   <h5 class="total-price">${cart.price}$</h5>
                                   <a href="checkout.html?id=${cart.id}" class="hero-checkout"
                                     ><h5 class="check-price">Check out</h5>
                                     </a>
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
