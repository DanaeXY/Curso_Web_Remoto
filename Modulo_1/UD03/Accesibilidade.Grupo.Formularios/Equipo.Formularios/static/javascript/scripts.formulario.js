document
  .getElementById("accesible-form")
  .addEventListener("submit", function (event) {
    let isValid = true;
    const fields = [
      "nombre",
      "email",
      "password",
      "mensaje",
      "fechaMatriculacion",
    ];
    let firstInvalidField = null;

    fields.forEach((field) => {
      const input = document.getElementById(field);
      const errorMessage = document.getElementById(field + "-error");

      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("error");
        errorMessage.style.display = "inline";

        if (!firstInvalidField) {
          firstInvalidField = input;
        }
      } else if (input.hasAttribute("pattern")) {
        const pattern = new RegExp(input.getAttribute("pattern"));
        if (!pattern.test(input.value)) {
          isValid = false;
          input.classList.add("error");
          errorMessage.style.display = "inline";

          if (!firstInvalidField) {
            firstInvalidField = input;
          }
        } else {
          input.classList.remove("error");
          errorMessage.style.display = "none";
        }
      } else {
        input.classList.remove("error");
        errorMessage.style.display = "none";
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      event.preventDefault();
    }
  });
