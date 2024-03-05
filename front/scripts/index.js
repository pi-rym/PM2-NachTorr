const tempData = require("./tempData");

console.log(tempData);

// function convertirPeliculaHtml(pelicula) {
//   const { title, year, director, duration, genre, rate, poster } = pelicula;
//   const tituloPelicula = document.createElement("h2");
//   const yearPelicula = document.createElement("p");
//   const directorPelicula = document.createElement("p");
//   const durationPelicula = document.createElement("p");
//   const genrePelicula = document.createElement("ul");
//   const ratePelicula = document.createElement("p");
//   const posterPelicula = document.createElement("img");
//   tituloPelicula.innerHTML = title;
//   yearPelicula.innerHTML = year;
//   directorPelicula.innerHTML = director;
//   durationPelicula.innerHTML = duration;
//   const genreListHtml = genre.map((parametro) => `<li>${parametro}</li>`);
//   genrePelicula.append(genreListHtml);
//   ratePelicula.innerHTML = rate;
//   posterPelicula.src = poster;
//   tituloPelicula.classList.add("tituloPelicula");
//   yearPelicula.classList.add("parrafoPelicula");
//   directorPelicula.classList.add("parrafoPelicula");
//   durationPelicula.classList.add("parrafoPelicula");
//   genrePelicula.classList.add("generoPelicula");
//   posterPelicula.classList.add("posterPelicula");
//   const nuevoDiv = document.createElement("div");
//   nuevoDiv.append(
//     tituloPelicula,
//     yearPelicula,
//     directorPelicula,
//     durationPelicula,
//     genrePelicula,
//     ratePelicula,
//     posterPelicula
//   );
//   nuevoDiv.classList.add("cuerpoPelicula");
//   return nuevoDiv;
// }

function convertirPeliculaHtml(pelicula) {
  const { title, poster } = pelicula;
  const tituloPelicula = document.createElement("h2");
  const posterPelicula = document.createElement("img");
  tituloPelicula.innerHTML = title;
  posterPelicula.src = poster;
  tituloPelicula.classList.add("titulo-pelicula-miniatura");
  posterPelicula.classList.add("poster-pelicula-miniatura");
  const nuevoDiv = document.createElement("div");
  nuevoDiv.append(tituloPelicula, posterPelicula);
  nuevoDiv.classList.add("pelicula-miniatura");
  return nuevoDiv;
}

function convertirTodasPeliculasaHtml(peliculas) {
  const peliculasMiniaturas = document.getElementById("peliculas-miniaturas");
  console.log("OSAIDJFOASI", peliculasMiniaturas);
  const peliculasaHtml = peliculas.map(convertirPeliculaHtml);
  peliculasaHtml.forEach((element) => {
    peliculasMiniaturas.append(element);
  });
  console.log("terminó");
}

convertirTodasPeliculasaHtml(tempData);
