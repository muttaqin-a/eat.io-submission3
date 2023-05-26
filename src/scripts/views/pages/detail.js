import UrlParser from '../../routes/url-parser'
import RestoranSource from '../../data/restoran-source'
import { createRestaurantDetailTemplate } from '../templates/template'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestoIdb from '../../data/favorite-resto-idb'

const Detail = {
  async render () {
    return `
    <div class="resto">
      <h1>
        <span class="content-title">Detail Restaurant</span>
      </h1>
    </div>
    <div id="restoDetail" class="detail"></div>
    <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestoranSource.detailRestoran(url.id)
    const restaurantContainer = document.querySelector('#restoDetail')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating
      }
    })
  }
}

export default Detail
