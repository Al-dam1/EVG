var app = {};

var miCallBack = datos => {
  app.datos = datos; // guardo todo el objeto

  const select = document.getElementById("select");
  const radios = document.querySelectorAll("input[name='direccion']");
  const boton = document.getElementById("parada");
  const resultado = document.getElementById("resultado");

  function mostrar() {
    const ramal = select.value;
    const sentido = document.querySelector("input[name='direccion']:checked")?.value;

    // si no eligió ramal o sentido, limpio todo
    if (!ramal || !sentido) {
      resultado.innerHTML = "";
      boton.innerText = "Paradas";
      return;
    }

    let paradas = app.datos[ramal];

    // si elige vuelta, invertimos el orden
    if (sentido === "vuelta") {
      paradas = paradas.slice().reverse();
    }

    // actualizar el texto del botón
    boton.innerText = `Paradas ${ramal} (${sentido})`;

    // renderizar solo la lista
    let html = "<ul>";
    paradas.forEach(p => {
      html += `<li>${p}</li>`;
    });
    html += "</ul>";

    resultado.innerHTML = html;
  }

  // eventos: cada vez que cambia ramal o sentido, intento mostrar
  select.addEventListener("change", mostrar);
  radios.forEach(r => r.addEventListener("change", mostrar));
};
