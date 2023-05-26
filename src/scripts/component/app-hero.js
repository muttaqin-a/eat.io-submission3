class AppHero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">eat.io</h1>
          <p class="hero-tagline">Find the best restaurant in your area</p>
        </div>
    </div>
    `
  }
}

customElements.define('app-hero', AppHero)
