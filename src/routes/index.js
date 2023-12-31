import { Header } from '../templates/Header.js';
import { Character } from '../pages/Character.js';
import { Error404 } from '../pages/Error404.js';
import { Home } from '../pages/Home.js';
import { About } from '../pages/About.js';
import { getHash } from '../utils/getHash.js';
import { resolveRoutes } from '../utils/resolveRoutes.js';
import { Search } from '../pages/Search';

const routes = {
  '/': Home,
  '/:id': Character,
  '/about': About
};

export const router = async () => {
  const header = document.getElementById('header');
  const mainContent = document.getElementById('main-content');
  header.innerHTML = await Header();
  mainContent.innerHTML = await Home();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  console.log(hash);

  let render = routes[route] ? routes[route] : Error404;
  if (routes[route] == Home) {
    mainContent.innerHTML = await render();
    Search();
  }
  mainContent.innerHTML = await render();
};
