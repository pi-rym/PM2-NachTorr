(() => {
  var t = {
      989: (t) => {
        const n = document.getElementById("infoPelicula");
        t.exports = function (t) {
          const e = document.createElement("div");
          e.classList.add("divPelicula"),
            (e.innerHTML = `\n  <div class="col">\n    <div class="content"> <a href="#">\n      <div class="content-overlay"></div> <img class="content-image" src="${
              t.poster
            }">\n        <div class="content-details fadeIn-bottom">\n              <h3 class="content-title">${
              t.title
            }</h3>\n              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Director: </strong>${
              t.director
            }</p>\n              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Duración: </strong>${
              t.duration
            }</p>\n              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Género: </strong>${t.genre.join(
              ", "
            )}</p>\n              <p class="content-text"><i class="fa fa-map-marker"></i><strong>Rate: </strong>${
              t.rate
            }</p>\n        </div>\n        </a> \n      </div>\n  </div>\n    `),
            n.appendChild(e);
        };
      },
    },
    n = {};
  function e(s) {
    var a = n[s];
    if (void 0 !== a) return a.exports;
    var o = (n[s] = { exports: {} });
    return t[s](o, o.exports, e), o.exports;
  }
  (() => {
    const t = e(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", (n) => n.forEach(t));
  })();
})();
