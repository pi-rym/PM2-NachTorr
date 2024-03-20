const { Router } = require("express");
const movieController = require("../controllers/movieController");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllmovies);

movieRouter.get("/byTitle", movieController.getMovieByTitle);

movieRouter.get("/:id", movieController.getMovieById);

movieRouter.post("/", movieController.createMovie);

module.exports = movieRouter;
