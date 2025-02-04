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