import { getData } from "../utils/getData";
import { getHash } from "../utils/getHash.js";

export const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  console.log(character);
  const view = `
    <div class="characters-inner">
        <arcticle class="characters-card">
              <img src="${character.image}" alt="${character.name}" />
              <h2>${character.name}</h2>
        </arcticle>

        <arcticle class="characters-card">
            <h3>Episodes:<span>${character.episode.length}</span></h3>
            <h3>Status:<span>${character.status}</span></h3>
            <h3>Species:<span>${character.species}</span></h3>
            <h3>Gender:<span>${character.gender}</span></h3>
            <h3>Origin:<span>${character.origin.name}</span></h3>
            <h3>Last Location:<span>${character.location.name}</span></h3>
        </arcticle>
    </div>
    `;

  return view;
};
