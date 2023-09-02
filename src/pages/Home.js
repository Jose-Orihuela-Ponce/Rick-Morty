import { getData } from "../utils/getData";

export const Home = async () => {
  const { results } = await getData();
  const view = `
    <div class="characters">
    ${results
      .map(
        (character) =>
          `
         <article class="characters-item">
             <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}" />
                <h4>${character.name}</h4>
             </a>
         </article>
        `
      )
      .join("")}
    `;

  return view;
};
