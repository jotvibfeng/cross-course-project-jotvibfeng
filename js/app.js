const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/index.html":
    console.log("displayProducts");
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
