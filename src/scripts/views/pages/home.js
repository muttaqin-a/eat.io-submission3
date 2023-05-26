import RestoranSource from '../../data/restoran-source'
import { createRestaurantItemTemplate } from '../templates/template'

const Home = {
  async render () {
    return `
    <div id="loading" style="display: none;">Memuat data...</div>
    <section class="content" id="content">
        <div class="resto">
          <h1>
            <span class="content-title">Explore Restaurant</span>
          </h1>
          <div class="list-resto" id="list"></div>
        </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await RestoranSource.listRestoran()
    const restaurantsContainer = document.querySelector('#list')
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(resto)
    })
  }
}

export default Home
