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

// const botonEnv = document.getElementById("botonEnviar");
// const title = document.getElementById("title");
// const year = document.getElementById("year");
// const director = document.getElementById("director");
// const duration = document.getElementById("duration");
// const genre = document.getElementById("genre");
// const rate = document.getElementById("rate");
// const poster = document.getElementById("poster");

// botonEnv.addEventListener("click", () => {
//   if (
//     title.value.length == "" ||
//     year.value.length == "" ||
//     director.value.length == "" ||
//     duration.value.length == "" ||
//     genre.value.length == "" ||
//     rate.value.length == "" ||
//     poster.value.length == ""
//   ) {
//     return window.alert("Debes completar todos los datos!!");
//   } else {
//     alert("gkoapsdfk");
//   }
// });
