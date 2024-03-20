const movieService = require("../services/movieService");

const getAllmovies = async (req, res) => {
  try {
    console.log("Esto es queries", req.query);
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(418).json({
      error: "No se pudieron cargar las películas",
    });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await movieService.getMovieById(id);
  res.status(200).json(movie);
};

const getMovieByTitle = async (req, res) => {
  const { title } = req.body;
  const movie = await movieService.findMovieByTitle(title);
  res.status(200).json(movie);
};

const createMovie = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await movieService.createMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(400).json({
      error: "No se pudo crear la película",
    });
  }
};

module.exports = {
  getAllmovies,
  getMovieById,
  getMovieByTitle,
  createMovie,
};
