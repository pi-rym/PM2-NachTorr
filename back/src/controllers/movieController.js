const movieService = require("../services/movieService");

const getAllmovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(418).json({
      error: "No se pudieron cargar las películas",
    });
  }
};

module.exports = {
  getAllmovies,
};
