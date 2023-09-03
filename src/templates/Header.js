export const Header = () => {
  const view = `
    <div class="header-main">
      <div class="header-nav">
        <ul>
          <li>
            <a href="#/about/"> About </a>
            <a href="/"> Home </a>
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
