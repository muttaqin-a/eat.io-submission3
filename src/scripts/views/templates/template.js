import CONFIG from '../../globals/config'

//  home
const createRestaurantItemTemplate = (restaurant) => `
  <article class="resto-item">
    <picture>        
        <data-srcset srcset="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
        <img class="resto-item-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin = "anonymous" />
    </picture>
    <div class="city" tabindex="0">${restaurant.city}</div>
    <div class="resto-item-content">
      <p class="rating">
      <i class="fa fa-star fa-1x"></i>
      <span href="#" class="rating">${restaurant.rating}</span>
      </p>
      </p>
      <h1 class="resto-item-title" tabindex="0">${restaurant.name}</h1>
      <p class="resto-item-description">${restaurant.description}</p>
      <a href="#/detail/${restaurant.id}" class="btn-detail" tabindex="0" title="Button halaman detail restoran">Click For Detail</a> 
    </div>
  </article>
`

// detail
const createRestaurantDetailTemplate = (restaurant) => `   
  <div class="detail">
    <h1 class="title" id="resto-title">${restaurant.name}</h1>
    <img class="detail-item-thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin = "anonymous"/>

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Alamat</h3>
          <p>${restaurant.address}</p>
        </li>
        <li>
          <h3>Kota</h3>
          <p>${restaurant.city}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${restaurant.description}</p>
    </div>

    <div class="review">
      <h2>Review</h2>
      <span class="name">${restaurant.customerReviews[0].name}</span> &bull; <span class="date">${restaurant.customerReviews[0].date}</span></p>
      <p>${restaurant.customerReviews[0].review}</p>
      <span class="name">${restaurant.customerReviews[1].name}</span> &bull; <span class="date">${restaurant.customerReviews[1].date}</span></p>
      <p>${restaurant.customerReviews[1].review}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
