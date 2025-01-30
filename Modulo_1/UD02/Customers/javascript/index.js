//CONTENEDOR PPAL
const app = document.getElementById("app");

//IMAGEN BARRA SUPERIOR
const barraSuperior = document.createElement("header");
barraSuperior.className = "menuSuperior";

//IMAGEN SUPERIOR
const imagenMenu = document.createElement("img"); // Crear elemento img
imagenMenu.className = "imagenSuperior";
imagenMenu.setAttribute("src", "./imagenes/menu.svg");
barraSuperior.appendChild(imagenMenu);

//BARRA LATERAL
const barraLateral = document.createElement("div");
barraLateral.className = "barraLateral";

//ICONO DE PERFIL Y ARRAY CON LOS ICONOS DE LA BARRA barraLateral
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
  
  barraLateral.appendChild(img);

});

// CREAR CONTENIDO PRINCIPAL
const main = document.createElement("div");
main.className = "main";


//AÑADIR UNA CABECERA PARA INTRODUCIR EL TEXTO CUSTOMERS
const header = document.createElement("div");
header.className = "main-header";

//AÑADIR TITULO CON SU PROPIA BARRA
const headerTitle = document.createElement("h1");
headerTitle.textContent = "Customers";
header.appendChild(headerTitle);

//AÑADIR + ADD NEW
const anhadirNuevo = document.createElement("button");
anhadirNuevo.className = "botonAnhadir";
anhadirNuevo.textContent = "+ Add New";
header.appendChild(anhadirNuevo);

// AÑADIR EL HEADER AL MAIN
main.appendChild(header);


//AÑADIR OTRO DIV PARA LA HAMBURGUESA
const div2 = document.createElement("div");
div2.className = "divHamburguesa";

//ICONO DE LA HAMBURGUESA A LA DERECHA DEL MISMO DIV
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

//DATOS PARA LA VISTA
const data = [
  {avatar: "./imagenes/perfil/Ellipse1.svg", name: "Devon Lane", email: "tranthuy@gmail.com", status: "Busy"},
{avatar: "./imagenes/perfil/Ellipse2.svg", name: "Darlene Robertson", email: "tranthuy@gmail.com", status: "Working"},
{avatar: "./imagenes/perfil/Ellipse3.svg", name: "Theresa Webb", email: "tranthuy@gmail.com", status: "Working"},
{avatar: "./imagenes/perfil/Ellipse4.svg", name: "Cody Fisher", email: "tranthuy@gmail.com", status: "Free"},
{avatar: "./imagenes/perfil/Ellipse5.svg", name: "Eleanor Pena", email: "tranthuy@gmail.com", status: "Free"},
{avatar: "./imagenes/perfil/Ellipse6.svg", name: "Savannah Nguyen", email: "tranthuy@gmail.com", status: "Busy"},
{avatar: "./imagenes/perfil/Ellipse7.svg", name: "Marvin McKinney", email: "tranthuy@gmail.com", status: "On Vacation"},
{avatar: "./imagenes/perfil/Ellipse8.svg", name: "Jenny Wilson", email: "tranthuy@gmail.com", status: "On Vacation"},
{avatar: "./imagenes/perfil/Ellipse9.svg", name: "Jerome Bell", email: "tranthuy@gmail.com", status: "Free"},
{avatar: "./imagenes/perfil/Ellipse10.svg", name: "Cameron Williamson", email: "tranthuy@gmail.com", status: "Busy"}
];

//CABECERA DE LA TABLA
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

//CABECERAS DE LAS COLUMNAS
["Name", "Email", "Status", "Actions"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
tabla.appendChild(thead);

// Crear el cuerpo de la tabla con el espacio para los datos que desamos añadir
data.forEach((item) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const avatarImg = document.createElement("img");
  nameCell.textContent = item.name;
  avatarImg.className = "fotoPerfilTabla";
  avatarImg.setAttribute("src", item.avatar);
  avatarImg.setAttribute("alt", "perfil");

  nameCell.prepend(avatarImg);//AÑADIR EL AVATAR JUNTO AL NOMBRE
  
   const emailCell = document.createElement("td");
  emailCell.textContent = item.email;

  const statusCell = document.createElement("td");
  statusCell.textContent = item.status;

    // Asignar clase según el estado para cambiarle el color según resultado
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
  
  const actionCell = document.createElement("td");
  const editButton = document.createElement("img");
  editButton.setAttribute("src", "./imagenes/GroupEdit.svg");
   
  actionCell.appendChild(editButton);// BOTON EDITAR

  //AÑADIR A CADA FILA EL NOMBRE, EMAIL, STATUS, EDICIÓN 
  row.appendChild(nameCell);
  row.appendChild(emailCell);
  row.appendChild(statusCell);
  row.appendChild(actionCell);
  
  tblBody.appendChild(row);//AÑAOIR LOS DATOS DEL ARRAY A LA TABLA

});



// posiciona el <tbody> dentro del elemento <table>
tabla.appendChild(tblBody);

//TABLA DENTRO DEL MAIN
main.appendChild(tabla);

//AÑADIR LOS ELEMENTOS
app.appendChild(barraSuperior);
app.appendChild(barraLateral);
app.appendChild(main);