const { Router } = require("express");
const movieController = require("../controllers/movieController");
const validateId = require("../middleware/validateId");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllmovies);

movieRouter.get("/byTitle", movieController.getMovieByTitle);

movieRouter.get("/:id", validateId, movieController.getMovieById);

movieRouter.post("/", movieController.createMovie);

module.exports = movieRouter;
