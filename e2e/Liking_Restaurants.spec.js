/* eslint-disable no-undef */
Feature('Liking Restaurants')

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.waitForElement('.resto-item', 3)

  I.seeElement('.resto-item')
  I.wait(1)

  I.seeElement('.btn-detail')
  I.wait(1)

  I.click('.btn-detail')
  I.waitForElement('#likeButtonContainer', 3)

  I.seeElement('#likeButtonContainer')
  I.wait(2)

  I.click('#likeButton')
  I.wait(3)

  I.amOnPage('/#/fav')
  I.wait(5)

  I.seeElement('.btn-detail')
  I.click('.btn-detail')

  I.waitForElement('#likeButtonContainer')

  I.seeElement('#likeButtonContainer')
  I.wait(3)

  I.click('#likeButton')
  I.wait(3)

  I.amOnPage('/#/fav')
  I.wait(5)
})
