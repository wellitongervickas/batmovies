# Bat Mvoies
Show popular movies, search a movie by title and see your favorited movies
[Demo](https://batmovies.herokuapp.com/)

## Setup and scripts

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:8080
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# tests and coverage
$ yarn test
$ yarn test:watch
```

## Environment Variables

| Variable | Description | Default Value |
|--|--|--|
| APP_URL | | `localhost` |
| APP_API_KEY | your themoviedb api key | `public_key` |
| APP_API_URL | | `https://api.themoviedb.org/3/` |
| APP_API_THUMB_PATH | list thumbnails | `https://image.tmdb.org/t/p/w220_and_h330_face` |
| APP_API_THUMB_PATH_BIG | movie details thumbnails | `https://image.tmdb.org/t/p/w300_and_h450_bestv2` |


## About development
> node 14.6.0

> npm 6.14.7
 
> nuxt cli 2.14.0

