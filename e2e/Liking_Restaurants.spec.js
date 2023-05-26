/* eslint-disable no-undef */
Feature('Liking Restaurants')

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/')
  await new Promise((resolve) => setTimeout(resolve, 3000))

  I.seeElement('.resto-item')
  await new Promise((resolve) => setTimeout(resolve, 1000))

  I.seeElement('.btn-detail')
  await new Promise((resolve) => setTimeout(resolve, 1000))

  I.click('.btn-detail')
  await new Promise((resolve) => setTimeout(resolve, 3000))

  I.seeElement('#likeButtonContainer')

  I.click('#likeButton')
  await new Promise((resolve) => setTimeout(resolve, 3000))

  I.amOnPage('/#/fav')
  await new Promise((resolve) => setTimeout(resolve, 3000))

  I.seeElement('.btn-detail')
  await new Promise((resolve) => setTimeout(resolve, 1000))

  I.click('.btn-detail')
  await new Promise((resolve) => setTimeout(resolve, 3000))

  I.seeElement('#likeButtonContainer')
  await new Promise((resolve) => setTimeout(resolve, 1000))

  I.click('#likeButton')
  await new Promise((resolve) => setTimeout(resolve, 5000))
})
