/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract'

let favoriteRestos = []

const FavoriteRestoArray = {
  getResto (id) {
    if (!id) {
      return
    }

    return favoriteRestos.find((restaurant) => restaurant.id == id)
  },

  getAllRestos () {
    return favoriteRestos
  },

  putResto (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(restaurant.id)) {
      return
    }

    favoriteRestos.push(restaurant)
  },

  deleteResto (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id != id)
  }
}
describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = [])

  itActsAsFavoriteRestaurantModel(FavoriteRestoArray)
})
