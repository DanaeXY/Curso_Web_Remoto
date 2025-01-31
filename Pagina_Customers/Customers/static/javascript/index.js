//CONTENEDOR PPAL DEL HTML
const app = document.getElementById("app");

function crearBarraCabecera() {
  //BARRA SUPERIOR
  const barraSuperior = document.createElement("header");
  barraSuperior.className = "menuSuperior";

  //IMAGEN SUPERIOR
  const grupoIzquierda = document.createElement("div");
  grupoIzquierda.id="grupoIzquierda";//disco perfil + buscador

  const imagenPerfilIzq = document.createElement("img");// Crear elemento img
  imagenPerfilIzq.className = "imagenPerfilIzq";//disco perfil izquierda

  const imagenSearch = document.createElement("img"); // Crear elemento img
  imagenSearch.className = "imagenSearch";//buscador

  const grupoDerecha = document.createElement("div");
  grupoDerecha.id="grupoDerecha"; //notificaciones + circulo perfil

  const imagenNotificaciones = document.createElement("img"); // Crear elemento img
  imagenNotificaciones.className = "imagenNotificaciones";//notificaciones

  const imagenPerfilDcha = document.createElement("img"); // Crear elemento img
  imagenPerfilDcha.className = "imagenPerfilDcha";//disco perfil derecha
  
  //suministrar rutas de los imágenes
  imagenPerfilIzq.setAttribute("src", "./imagenes/barra_superior/profileIzq.svg");
  imagenSearch.setAttribute("src", "./imagenes/barra_superior/search.svg");
  imagenNotificaciones.setAttribute("src", "./imagenes/barra_superior/notifications.svg");
  imagenPerfilDcha.setAttribute("src", "./imagenes/barra_superior/profileDcha.svg");

  //AÑADIR LAS IMÁGENES A CADA GRUPO
  grupoIzquierda.appendChild(imagenPerfilIzq);
  grupoIzquierda.appendChild(imagenSearch);
  grupoDerecha.appendChild(imagenNotificaciones);
  grupoDerecha.appendChild(imagenPerfilDcha);
  
  //AÑADIR LOS GRUPOS A LA BARRA
  barraSuperior.appendChild(grupoIzquierda);
  barraSuperior.appendChild(grupoDerecha);

  return barraSuperior;//DEVOLUCIÓN DE LA FUNCIÓN
}

function crearBarraLateral() {
  //BARRA LATERAL
  const barraLateral = document.createElement("div");
  barraLateral.className = "barraLateral";

  //ARRAY CON LOS ICONOS DE LA BARRA LATERAL
  const iconosBarraLateral = [
    "./imagenes/menu_lateral/home.svg",
    "./imagenes/menu_lateral/customers.svg",
    "./imagenes/menu_lateral/new_invoice.svg",
    "./imagenes/menu_lateral/tag.svg",
  ];

  //RECORRO EL ARRAY Y LOS AÑADO A LA BARRA LATERAL
  iconosBarraLateral.forEach((icon) => {
    const img = document.createElement("img");
    img.src = icon;
    img.className = "iconosBarraLateral";

    barraLateral.appendChild(img);//AÑADIR TODO A LA BARRA LATERAL
  });

  return barraLateral;
}

function crearContenidoPrincipal() {
  // CREAR CONTENEDOR PRINCIPAL
  const main = document.createElement("div");
  main.className = "main";

  //AÑADIR UN CONTENEDOR DE CABECERA PARA INTRODUCIR TÍTULO DE PÁGINA
  const header = document.createElement("div"); 
  header.className = "main-header";

  //AÑADIR TITULO
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Customers";
  header.appendChild(headerTitle);

  //AÑADIR BOTÓN + ADD NEW
  const anhadirNuevo = document.createElement("button");
  anhadirNuevo.className = "botonAnhadir";
  anhadirNuevo.textContent = "+ Add New";
  header.appendChild(anhadirNuevo);

  // AÑADIR EL HEADER AL MAIN
  main.appendChild(header);

  //AÑADIR OTRO DIV PARA LA HAMBURGUESA + BOTON AÑADIR
  const div2 = document.createElement("div");
  div2.className = "divHamburguesa";

  //AÑADIR IMG PARA INTRODUCIR LA IMAGEN DE LA HAMBURGUESA
  const hamburguesa = document.createElement("img");
  hamburguesa.className = "icono-hamburguesa";
  hamburguesa.setAttribute("src", "./imagenes/group.svg");
  div2.append(hamburguesa);
  main.appendChild(div2);

  //CREAR TABLA
  const tabla = document.createElement("table");
  tabla.className = "tabla-costumers";
  //CREAR BODY DE LA TABLA
  const tblBody = document.createElement("tbody");

  //ARRAY ASOCIATIVO CON DATOS DE LOS EMPLEADOS PARA LA VISTA (EN VERSIÓN REAL CONECTARÍA CON BBDD Y TRAERÍA LOS DATOS)
  const data = [
    { avatar: "./imagenes/perfil/Ellipse1.svg", name: "Devon Lane", email: "tranthuy@gmail.com", status: "Busy", role: "Bot Analyst",},
    { avatar: "./imagenes/perfil/Ellipse2.svg", name: "Darlene Robertson", email: "thungkienspktnd@gmailcom", status: "Working",role:"Reporter",},
    { avatar: "./imagenes/perfil/Ellipse3.svg", name: "Theresa Webb", email: "thungang@gmail.com", status: "Working",role: "Broadcaster",},
    { avatar: "./imagenes/perfil/Ellipse4.svg", name: "Cody Fisher", email: "tienlapsktnd@gmail.com", status: "Free",role: "Sales Manager",},
    { avatar: "./imagenes/perfil/Ellipse5.svg", name: "Eleanor Pena", email: "vuhaithoungnute@gmail.com", status: "Free",role: "Analytics Admin",},
    { avatar: "./imagenes/perfil/Ellipse6.svg", name: "Savannah Nguyen", email: "manhhachkt08@gmail.com", status: "Busy",role:"Marketer",},
    { avatar: "./imagenes/perfil/Ellipse7.svg", name: "Marvin McKinney", email: "danghoang87hl@gmail.com", status: "On Vacation",role: "Team Editor",},
    { avatar: "./imagenes/perfil/Ellipse8.svg", name: "Jenny Wilson", email: "binhan628@gmail.com", status: "On Vacation", role: "Bot Editor",},
    { avatar: "./imagenes/perfil/Ellipse9.svg", name: "Jerome Bell", email: "nvt.isst.nute@gmail.com", status: "Free",role: "Team Owner",},
    { avatar: "./imagenes/perfil/Ellipse10.svg", name: "Cameron Williamson", email: "ckctm12@gmail.com", status: "Busy",role: "PPC Expert",},
  ];

  //CABECERA DE LA TABLA
  const thead = document.createElement("thead");
  const grupoCabecera = document.createElement("tr");

  //CREO Y RECORRO UN ARRAY DE LOS NOMBRES DE LAS CABECERAS DE LA TABLA
  ["Name", "Email", "Status", "Role","Actions"].forEach((text) => {
    const cabeceraColumnas = document.createElement("th");
    cabeceraColumnas.textContent = text;

    grupoCabecera.appendChild(cabeceraColumnas);//AÑADO CADA TEXTO DE CABECERA A CADA COLUMNA
  });

  thead.appendChild(grupoCabecera);
  tabla.appendChild(thead);

  // LEE EL ARRAY DE LOS DATOS DE LOS TRABAJADORES Y LOS AÑADE A CADA FILA, BAJO SU NOMBRE DE CABECERA
  data.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const avatarImg = document.createElement("img");
    nameCell.textContent = item.name;//AÑADE EL NOMBRE DEL TRABAJADOR
    avatarImg.className = "fotoPerfilTabla";
    avatarImg.setAttribute("src", item.avatar);
    avatarImg.setAttribute("alt", "perfil");

    nameCell.prepend(avatarImg); //AÑADIR EL AVATAR JUNTO AL NOMBRE

    const emailCell = document.createElement("td");
    emailCell.textContent = item.email;//AÑADE EL MAIL DEL TRABAJADOR

    const statusCell = document.createElement("td");
    statusCell.textContent = item.status;//AÑADE EL STATUS DEL TRABAJADOR

    const roleCell = document.createElement("td");
    roleCell.textContent = item.role;//AÑADE EL ROLE DEL TRABAJADOR

    // Asignar clase según el estado para cambiarle el color según resultado en CSS
    switch (item.status) {
      case "Busy":
        statusCell.classList.add("status-busy");
        break;
      case "On Vacation":
        statusCell.classList.add("status-on-vacation");
        break;
      case "Free":
        statusCell.classList.add("status-free");
        break;
      case "Working":
        statusCell.classList.add("status-working");
        break;
    }

    // BOTONES EDITAR
    const accionCelda = document.createElement("td");
    const editButton = document.createElement("img");
    editButton.setAttribute("src", "./imagenes/GroupEdit.svg");

    accionCelda.appendChild(editButton); 

    //AÑADIR A CADA FILA EL NOMBRE, EMAIL, STATUS, EDICIÓN
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(statusCell);
    row.appendChild(roleCell);
    row.appendChild(accionCelda);

    tblBody.appendChild(row); //AÑADIR LOS DATOS DEL ARRAY A LA TABLA
  });

  // posiciona el <tbody> dentro del elemento <table>
  tabla.appendChild(tblBody);

  //TABLA DENTRO DEL MAIN
  main.appendChild(tabla);

  return main;
}

// Llamar a las funciones y obtener los elementos creados
const barraSuperior = crearBarraCabecera();
const barraLateral = crearBarraLateral();
const main = crearContenidoPrincipal();

//AÑADIR LOS ELEMENTOS A LA PÁGINA
app.appendChild(barraSuperior);
app.appendChild(barraLateral);
app.appendChild(main);
