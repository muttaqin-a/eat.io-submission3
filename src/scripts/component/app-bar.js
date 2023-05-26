class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <header class="header">
    <div class="appbar">
      <a href="#">
        <div class="header_logo">
          <h2>eat.io</h2>
        </div>
      </a>
      <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="Hamburger">☰</button>
    </div>

    <nav id="drawer" class="header-nav">
      <ul class="nav-list">
        <li class="nav-item"><a href="#/home">Home</a></li>
        <li class="nav-item"><a href="#/fav">Favorites</a></li>
        <li class="nav-item about-us">
          <a href="https://www.instagram.com/a.rmt___/" target="_blank"  rel="noopener">About Us</a>
        </li>
      </ul>
    </nav>
  </header>
    `
  }
}

customElements.define('app-bar', AppBar)
