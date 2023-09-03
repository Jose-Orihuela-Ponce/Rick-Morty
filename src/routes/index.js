import { Header } from "../templates/Header.js";
import { Character } from "../pages/Character.js";
import { Error404 } from "../pages/Error404.js";
import { Home } from "../pages/Home.js";
import { getHash } from "../utils/getHash.js";
import { resolveRoutes } from "../utils/resolveRoutes.js";
import { Search } from "../pages/Search";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

export const router = async () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  header.innerHTML = await Header();
  content.innerHTML = await Home();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  if (routes[route] == Home) {
    content.innerHTML = await render();
    Search();
  }
  content.innerHTML = await render();
};
