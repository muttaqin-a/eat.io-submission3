/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteResto(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb)
})
