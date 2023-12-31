export const Header = async () => {
  const view = `
    <div class="header-main">
      <div class="header-nav">
        <ul>
          <li>
            <a href="#/about/"> About </a>
            <a class="home-link" href="/Rick-Morty/"> Home </a>
          </li>
        </ul>
      </div>

      <div class="header-logo">
        <h1>Rick and Morty API</h1>
      </div>

    </div>
      `;

  return view;
};
