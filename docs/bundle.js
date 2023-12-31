(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{if(a){const e=`${n}/${a}`;try{const n=await fetch(e);return await n.json()}catch(n){console.error("fetch error : "+n)}}else try{const a=await fetch(n);return await a.json()}catch(n){console.error("fetch error : "+n)}},e=()=>location.hash?location.hash.split("/")[1]:"/",t=()=>'\n    <div class="error404">\n        <h2>Error 404</h2>\n    </div>\n    ',i=async()=>{const{results:n}=await a();return document.getElementById("input").style.display="",`\n    <div class="characters">\n    ${n.map((n=>`\n         <article class="characters-item">\n             <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}" />\n                <h2>${n.name}</h2>\n             </a>\n         </article>\n        `)).join("")}\n    `};const s={"/":i,"/:id":async()=>{document.getElementById("input").style.display="none";const n=e(),t=await a(n);return`\n    <div class="characters-inner">\n        <arcticle class="characters-card">\n              <img src="${t.image}" alt="${t?.name}" />\n              <h2>${t?.name}</h2>\n        </arcticle>\n       \n        <arcticle class="characters-card">\n            <h3> <span>Episodes :</span><span>${t.episode?.length}</span></h3>\n            <h3> <span>Status :</span><span>${t.status}</span></h3>\n            <h3> <span>Species :</span><span>${t.species}</span></h3>\n            <h3> <span>Gender :</span><span>${t.gender}</span></h3>\n            <h3> <span>Origin :</span><span>${t.origin?.name}</span></h3>\n            <h3> <span>Last Location :</span><span>${t.location?.name}</span></h3>\n        </arcticle>\n    </div>\n    `},"/about":async()=>'\n  \n    <ul>\n        # Rick and Morty SPA (Single Page Application)\n\n        <li>This is a simple Single Page Application that utilizes the Rick     and Morty API to display information about characters,       locations, and episodes from the animated series "Rick and    Morty."</li>\n    </ul>\n \n    <ul>\n        ## Features\n         <li>View a list of characters, locations, and episodes.</li>\n         <li>Search for specific characters, locations, and       episodes.</li>\n         <li>Click on items to see more details.</li>\n    </ul>\n \n     <ul>\n        ## Technologies Used\n        <li> HTML5</li>\n        <li> CSS3</li>\n        <li> JavaScript (ES6)</li>\n        <li> [Rick and Morty API](https://rickandmortyapi.com/)</li>\n    </ul>\n  \n    <ul>\n        ## Installation\n        <p>1. Clone the repository:</p>\n         <li>git clone https://github.com/Jose-Orihuela-Ponce/Rick-Morty.git</li>\n    \n    </ul>\n\n      '},c=async()=>{const n=document.getElementById("header"),c=document.getElementById("main-content");n.innerHTML=await(async()=>'\n    <div class="header-main">\n      <div class="header-nav">\n        <ul>\n          <li>\n            <a href="#/about/"> About </a>\n            <a class="home-link" href="/"> Home </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="header-logo">\n        <h1>Rick and Morty API</h1>\n      </div>\n\n    </div>\n      ')(),c.innerHTML=await i();let r=e(),o=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(r);console.log(r);let l=s[o]?s[o]:t;s[o]==i&&(c.innerHTML=await l(),function(){const n=document.getElementById("input"),e=document.getElementById("main-content");n.addEventListener("input",(()=>{!async function(n){const{results:t}=await a();!function(n){const a=`\n    <div class="characters">\n    ${n.map((n=>`\n         <article class="characters-item">\n             <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}" />\n                <h2>${n.name}</h2>\n             </a>\n         </article>\n        `)).join("")}\n    `;e.innerHTML=a}(t.filter((a=>a.name.toLowerCase().includes(n)||a.species.toLowerCase().includes(n)||a.status.toLowerCase().includes(n))))}(n.value.toLowerCase())}))}()),c.innerHTML=await l()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();