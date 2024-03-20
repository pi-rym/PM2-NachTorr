const renderCards = require("./renderCards");

const axios = require("axios");

const fetchMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    response.data.forEach(renderCards);
  } catch (err) {
    console.log(err);
  }
};

const createMovie = async () => {
  try {
    await axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
  } catch (error) {}
};

fetchMovies();
createMovie();
