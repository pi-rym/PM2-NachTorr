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

fetchMovies();

// $.get("https://students-api.2.us-1.fl0.io/movies", (data) =>
//   data.forEach(renderCards)
// );
