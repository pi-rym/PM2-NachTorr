const movieService = require("../services/movieService");
const catchAsync = require("../utils/catchAsync");

const getAllmovies = async (req, res) => {
  const movies = await movieService.getMovies();
  res.status(200).json(movies);
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
  console.log(req.body);
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
  res.status(201).send("¡Película creada con éxito!");
};

module.exports = {
  getAllmovies: catchAsync(getAllmovies),
  getMovieById: catchAsync(getMovieById),
  getMovieByTitle: catchAsync(getMovieByTitle),
  createMovie: catchAsync(createMovie),
};
