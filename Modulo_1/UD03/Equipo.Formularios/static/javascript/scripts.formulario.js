function validarFormulario() {
    var campos = document.querySelectorAll("input[required]");
    for (var i = 0; i < campos.length; i++) {
      if (campos[i].value === "") {
        alert("El campo " + campos[i].name + " es obligatorio.");
        campos[i].focus();
        return false;
      }
    }
    return true;
  }

  //MANUEL
   /*Para la accesibilidad en las notificaciones enviamos el foco al primer
      error encontrado*/
      document
        .getElementById("accesible-form")
        .addEventListener("submit", function (event) {
          let isValid = true;
          const fields = ["nombre", "email", "password", "mensaje", "expire"];

          fields.forEach((field) => {
            const input = document.getElementById(field);
            const errorMessage = document.getElementById(field + "-error");

            if (!input.value.trim()) {
              isValid = false;
              input.classList.add("error");
              errorMessage.style.display = "inline";
              input.focus();
            } else if (input.hasAttribute("pattern")) {
              const pattern = new RegExp(input.getAttribute("pattern"));
              if (!pattern.test(input.value)) {
                isValid = false;
                input.classList.add("error");
                errorMessage.style.display = "inline";
                input.focus();
              } else {
                input.classList.remove("error");
                errorMessage.style.display = "none";
              }
            } else {
              input.classList.remove("error");
              errorMessage.style.display = "none";
            }
          });

          if (!isValid) {
            event.preventDefault();
          }
        });

