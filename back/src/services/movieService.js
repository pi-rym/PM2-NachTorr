const Movie = require("../models/Movie");

const getMovies = async () => {
  const movies = await Movie.find();
  return movies;
};

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);
  return movie;
};

const findMovieByTitle = async (title) => {
  const movie = await Movie.findOne({ title });
  return movie;
};

const createMovie = async (movie) => {
  const newMovie = await Movie.create(movie);
  return newMovie;
};

module.exports = {
  getMovies,
  getMovieById,
  findMovieByTitle,
  createMovie,
};

// class MovieCard {
//   constructor(title, year, director, duration, genre, rate, poster) {
//     if (
//       typeof title !== "string" ||
//       typeof year !== "number" ||
//       typeof director !== "string" ||
//       typeof duration !== "string" ||
//       !(Array.isArray(genre) && genre.length > 0) ||
//       typeof rate !== "number" ||
//       typeof poster !== "string"
//     ) {
//       throw new Error("Los datos no estan correctos");
//     } else {
//       this.title = title;
//       this.year = year;
//       this.director = director;
//       this.duration = duration;
//       this.genre = genre;
//       this.rate = rate;
//       this.poster = poster;
//     }
//   }
// }

// const moviesClass = movies.map((movie) => {
//   return new MovieCard(
//     movie.title,
//     movie.year,
//     movie.director,
//     movie.duration,
//     movie.genre,
//     movie.rate,
//     movie.poster
//   );
// });

// const getMovies = async () => {
//   return moviesClass;
// };

// module.exports = { getMovies };
