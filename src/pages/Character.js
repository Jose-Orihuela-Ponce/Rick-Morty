import { getData } from "../utils/getData";
import { getHash } from "../utils/getHash.js";

export const Character = async () => {
  const searchInput = document.getElementById("input");
  searchInput.style.display = "none";
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="characters-inner">
        <arcticle class="characters-card">
              <img src="${character.image}" alt="${character.name}" />
              <h2>${character.name}</h2>
        </arcticle>
       
        <arcticle class="characters-card">
            <h3> <span>Episodes :</span><span>${character.episode.length}</span></h3>
            <h3> <span>Status :</span><span>${character.status}</span></h3>
            <h3> <span>Species :</span><span>${character.species}</span></h3>
            <h3> <span>Gender :</span><span>${character.gender}</span></h3>
            <h3> <span>Origin :</span><span>${character.origin.name}</span></h3>
            <h3> <span>Last Location :</span><span>${character.location.name}</span></h3>
        </arcticle>
    </div>
    `;

  return view;
};
