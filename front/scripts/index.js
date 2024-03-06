$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  const nuevoArrayPelicula = data.map((pelicula) =>
    plantillaPeliculas(pelicula)
  );
  nuevoArrayPelicula.forEach((pelicula) => {
    moviesContainer.appendChild(pelicula);
  });
});

const moviesContainer = document.getElementById("infoPelicula");

function plantillaPeliculas(pelicula) {
  const contenedorPelicula = document.createElement("div");
  contenedorPelicula.classList.add("divPelicula");

  contenedorPelicula.innerHTML = `
  <img src="${pelicula.poster}" alt="${pelicula.poster}"/>
    <h3>${pelicula.title} (${pelicula.year})</h3>
    <p><strong>Director:</strong> ${pelicula.director}</p>
    <p><strong>Duración:</strong> ${pelicula.duration}</p>
    <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
    <p><strong>Rate:</strong> ${pelicula.rate}</p>
    `;
  return contenedorPelicula;
}

///////////////////////////////////////////

// const moviesContainer = document.getElementById("peliculas-miniaturas");

// $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
//   renderCards(data);
// });

// const renderCards = (data) => {
//   data.forEach((movie) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const title = document.createElement("h2");
//     title.classList.add("card-title");
//     title.innerHTML = movie.title;

//     const poster = document.createElement("img");
//     poster.classList.add("card-image");
//     poster.src = movie.poster;

//     const year = document.createElement("p");
//     year.classList.add("card-text");
//     year.innerHTML = movie.year;

//     card.appendChild(poster);
//     card.appendChild(title);
//     card.appendChild(year);

//     moviesContainer.appendChild(card);
//   });
// };

//////////////////////////////////////////////////

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

// function convertirPeliculaHtml(pelicula) {
//   const { title, poster } = pelicula;
//   const tituloPelicula = document.createElement("h2");
//   const posterPelicula = document.createElement("img");
//   tituloPelicula.innerHTML = title;
//   posterPelicula.src = poster;
//   tituloPelicula.classList.add("titulo-pelicula-miniatura");
//   posterPelicula.classList.add("poster-pelicula-miniatura");
//   const nuevoDiv = document.createElement("div");
//   nuevoDiv.append(tituloPelicula, posterPelicula);
//   nuevoDiv.classList.add("pelicula-miniatura");
//   return nuevoDiv;
// }

// function convertirTodasPeliculasaHtml(peliculas) {
//   const peliculasMiniaturas = document.getElementById("peliculas-miniaturas");
//   const peliculasaHtml = peliculas.map(convertirPeliculaHtml);
//   peliculasaHtml.forEach((element) => {
//     peliculasMiniaturas.append(element);
//   });
// }
