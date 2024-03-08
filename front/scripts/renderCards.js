const moviesContainer = document.getElementById("infoPelicula");

function plantillaPeliculas(pelicula) {
  const contenedorPelicula = document.createElement("div");
  contenedorPelicula.classList.add("divPelicula");

  contenedorPelicula.innerHTML = `
  <div class="col">
    <div class="content"> <a href="#">
      <div class="content-overlay"></div> <img class="content-image" src="${
        pelicula.poster
      }">
        <div class="content-details fadeIn-bottom">
              <h3 class="content-title">${pelicula.title}</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Director: </strong>${
                pelicula.director
              }</p>
              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Duración: </strong>${
                pelicula.duration
              }</p>
              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Género: </strong>${pelicula.genre.join(
                ", "
              )}</p>
              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Rate: </strong>${
                pelicula.rate
              }</p>
        </div>
        </a> 
      </div>
  </div>
    `;
  moviesContainer.appendChild(contenedorPelicula);
}

module.exports = plantillaPeliculas;
