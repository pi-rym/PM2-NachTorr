const validateForm = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const inicioCine = 1895;
  if (
    title == "" ||
    year == "" ||
    year > new Date().getFullYear() ||
    year < inicioCine ||
    director == "" ||
    duration == "" ||
    !Array.isArray(genre) ||
    genre.length == 0 ||
    rate == "" ||
    poster == ""
  ) {
    res.status(400).send("Los datos son incorrectos");
  } else {
    next();
  }
};

module.exports = validateForm;
