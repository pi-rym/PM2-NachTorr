const botonEnv = document.getElementById("botonEnviar");

const botonEnviar = () => {
  const title = document.getElementById("title");
  const year = document.getElementById("year");
  const director = document.getElementById("director");
  const duration = document.getElementById("duration");
  const genre = document.getElementById("genre");
  const rate = document.getElementById("rate");
  const poster = document.getElementById("poster");

  const titleValor = title.value;
  const yearValor = year.value;
  const directorValor = director.value;
  const durationValor = duration.value;
  const genreValor = genre.value;
  const rateValor = rate.value;
  const posterValor = poster.value;

  if (
    titleValor == "" ||
    yearValor == "" ||
    directorValor == "" ||
    durationValor == "" ||
    genreValor == "" ||
    rateValor == "" ||
    posterValor == ""
  ) {
    return window.alert("¡Debes completar todos los datos!");
  } else {
    alert("Enviado con éxito");
  }
};

botonEnv.addEventListener("click", botonEnviar);

const botonBorr = document.getElementById("botonBorrar");

const botonBorrar = () => {
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("poster").value = "";
};

botonBorr.addEventListener("click", botonBorrar);
