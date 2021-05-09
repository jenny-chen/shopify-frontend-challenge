# Shopify Frontend Intern Challenge 2021 - Shoppies

Welcome to my Shopify frontend intern challenge 2021! Feel free to [test it out](http://jennychen.ca/shopify-frontend-challenge/) and read through my thought process behind building it. I appreciate you taking the time to look through :)

## Design + Planning Process

[Figma file](https://www.figma.com/file/tuDbkBOguef616eNrkWEQd/Shopify-Frontend-Challenge-2021?node-id=0%3A1)

In terms of planning, I more or less followed a few steps:
1. understand what fundamental features are necessary (ex. search for movies, display nominations)
2. plot out basic layout of website (mobile + desktop)
3. add animations, aesthetics, quality of life extras

I kept the site pretty simple, the main components are allowing the user to search for movies, nominate movies, and then view their nominations up to a count of 5. I didn't want to clutter the site with too many extras; there is an instructions page, but it'll only show up once, the user's visit will be cached for the next time they visit the site.

Overall, I just wanted a clean, simple, and intuitive experience. Picking movie nominations shouldn't be tricky nor time-consuming after all.


## Development

Developed using React, JavaScript

Libraries used: [styled-components](https://styled-components.com/)

All components were developed from scratch and the site has fully responsive design across all platforms.

### Features
- User can search movies (returns 5 results)
- User can select movies to nominate
  - Display current nominations
  - Display message when nominations are full
- User nominations are cached for user's next visit
- Various animations (etc. removing movies, viewing nomination list on mobile)


## Improvements for the Future
Needless to say, there are a variety of improvements that could be made for the future. Here are just a few of my ideas. 

- **Panel for displaying extra information**
  - Title and release year are the bare minimum for information, it would be nice to allow the user to view more info
  - This could be done sending another request to the API in order to get the more detailed explanation on that specific movie
- **Login**
  - Pretty self-explanatory, provide a method for the user to log in so we can track multiple users
- **Suggest similar movies**
  - More of a stretch idea, but based on the user's current nominations we could then go to suggest similar movies that they might like (based on genres, directors etc.)
