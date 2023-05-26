import FavoriteRestoIdb from '../../data/favorite-resto-idb'
import { createRestaurantItemTemplate } from '../templates/template'

const Favorites = {
  async render () {
    return `
    <section class="content" id="content">
        <div class="resto">
          <h1>
            <span class="content-title">Favorite Restaurant</span>
          </h1>
          <div class="list-resto" id="list"></div>
        </div>
    </section>
  `
  },

  async afterRender () {
    const restaurants = await FavoriteRestoIdb.getAllRestos()
    const restaurantsContainer = document.querySelector('#list')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorites
