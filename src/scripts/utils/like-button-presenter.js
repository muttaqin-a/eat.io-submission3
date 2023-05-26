import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template'

const LikeButtonPresenter = {
  async init ({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant
    this._favoriteRestaurant = favoriteRestaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestoExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoExist (id) {
    const restaurant = await this._favoriteRestaurant.getResto(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putResto(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteResto(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonPresenter
