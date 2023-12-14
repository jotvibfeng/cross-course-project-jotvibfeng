import { products } from "./data/products.js";

async function fetchgamehub() {
    const response = await fetch ("https://api.noroff.dev/api/v1/gamehub");
    console.log (response);
    const results = await response.json();
    console.log(results);
}

fetchgamehub();





