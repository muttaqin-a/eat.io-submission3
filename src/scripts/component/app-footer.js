class AppFooter extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <footer>
        <p>Copyright &copy; 2023 - eat.io</p>
      </footer> 
    `
  }
}

customElements.define('app-footer', AppFooter)
