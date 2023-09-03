import { getData } from "../utils/getData";

export function Search() {
  const searchInput = document.getElementById("input");
  const content = document.getElementById("content");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterData(searchTerm);
    async function filterData(searchTerm) {
      const { results } = await getData();
      const filteredCharacters = results.filter((character) => {
        return (
          character.name.toLowerCase().includes(searchTerm) ||
          character.species.toLowerCase().includes(searchTerm) ||
          character.status.toLowerCase().includes(searchTerm)
        );
      });

      displayResults(filteredCharacters);
    }
  });

  function displayResults(results) {
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
    content.innerHTML = view;
  }
}
