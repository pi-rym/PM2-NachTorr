module.exports = {
  entry: {
    formulario: "./scripts/formulario.js",
    peliculas: "./scripts/peliculas.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].js",
  },
};
