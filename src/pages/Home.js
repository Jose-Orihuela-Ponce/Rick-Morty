import { getData } from "../utils/getData";

export const Home = async () => {
  const { results } = await getData();
  const searchInput = document.getElementById("input");
  searchInput.style.display = "";
  const view = `
    <div class="characters">
    ${results
      .map(
        (character) =>
          `
         <article class="characters-item">
             <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}" />
                <h2>${character.name}</h2>
             </a>
         </article>
        `
      )
      .join("")}
    `;

  return view;
};
