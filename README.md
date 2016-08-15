# Lavacar-Express-Frontend

React.js - Sass - Webpack

## Running Locally

Make sure you have NPM installed

```sh
$ npm install
$ webpack-dev-server --progress --colors
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Production Build

Before running the production command, the routes must change to fit the Backend Public folder.

src -> styles -> main.scss:
- Remove the /src/styles from the fonts.
- Remove the /public for the background image

src -> components:
- Remove the /public from home.component.jsx and imgCarrousel.component.jsx

After this, we can run the build command:

```sh
$ webpack --progress -p
```

This will build the main.js in the Public folder, copy and paste the main.js in the Backend.

## Documentation
