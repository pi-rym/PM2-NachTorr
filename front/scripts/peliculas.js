const api = require("./api");
const renderCards = require("./renderCards");

api.fetchMovies().then((peliculas) => {
  peliculas.forEach(renderCards);
});
