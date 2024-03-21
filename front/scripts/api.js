const axios = require("axios");

const fetchMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const createMovie = async (title, year, director, duration, genre, rate, poster) => {
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

module.exports = {
  fetchMovies,
  createMovie,
};
