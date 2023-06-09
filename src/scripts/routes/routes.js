import Home from '../views/pages/home'
import Favorites from '../views/pages/favorites'
import Detail from '../views/pages/detail'

const routes = {
  '/': Home, // defailt page
  '/home': Home,
  '/fav': Favorites,
  '/detail/:id': Detail
}

export default routes
