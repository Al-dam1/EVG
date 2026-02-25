var app = {};

fetch("data/paradas.json")
  .then(res => res.json())
  .then(datos => {
    app.datos = datos;

    const select = document.getElementById("select");
    const radios = document.querySelectorAll("input[name='direccion']");
    const boton = document.getElementById("parada");
    const resultado = document.getElementById("resultado");

    function mostrar() {
      const ramal = select.value;
      const sentido = document.querySelector("input[name='direccion']:checked")?.value;

      if (!ramal || !sentido) {
        resultado.innerHTML = "";
        boton.innerText = "Paradas";
        return;
      }

      let paradas = app.datos[ramal];

      if (sentido === "vuelta") {
        paradas = paradas.slice().reverse();
      }

      boton.innerText = `Paradas ${ramal} (${sentido})`;

      let html = "<ul>";
      paradas.forEach(p => {
        html += `<li>${p}</li>`;
      });
      html += "</ul>";

      resultado.innerHTML = html;
    }

    select.addEventListener("change", mostrar);
    radios.forEach(r => r.addEventListener("change", mostrar));
  })
  .catch(err => console.error("Error cargando JSON:", err));
