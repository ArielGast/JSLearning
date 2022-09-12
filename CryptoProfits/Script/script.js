const users = [];

function User (nombreUs, apellidoUs, dni ) {
    this.nombreUs = nombreUs;
    this.apellidoUs = apellidoUs;
    this.dni = dni;
} 

// Creo Menu deplegable sobre seccion Nav (aparece y desaparece cuando pasa el mouse por encima) 

const menu = document.querySelector(".nav");
let menuDespl = document.querySelector("ul");
menuDespl.classList.add("hideMenu")

menu.addEventListener('mouseover', () => {
    menuDespl.classList.remove("hideMenu")
    menuDespl.classList.add("showMenu")
})
menu.addEventListener('mouseout', () => {
    menuDespl.classList.remove("showMenu")
    menuDespl.classList.add("hideMenu");   
})

// Crear nuevo usuario
function newUser () {
    const contenido = document.querySelector(".content");
    contenido.innerHTML = "";
    contenido.innerHTML = `<h3>Ingresa tus datos en el siguiente formulario</h3>
                           <form id = "form_usuario">
                           <label for = "name">Nombre</label>
                           <input type = "text" id = "name" name = "userName">
                           <label for = "surName">Apellido</label>
                           <input type = "text" id = "surName" surName = "userSurame">
                           <label for = "userDni">DNI</label>
                           <input type ="number" id ="dni" userDni = "dni">
                           <button type = "submit" id="enviar_form">Enviar</button>
                           </form>`
    document.body.append(contenido);
    const userName = document.getElementById("name");
    const userSurname = document.getElementById("surName");
    const userDni = document.getElementById("dni");
    const formulario = document.getElementById("form_usuario");
    formulario.addEventListener("submit", validarFormulario); 
    const enviar = document.getElementById('enviar_form');
    enviar.onclick = () => {
        users.push(new User(userName.value, userSurname.value, userDni.value));
        contenido.innerHTML = `<h4> Usuario cargado correctamente</4>`;
    }
}

function validarFormulario (e) {
    e.preventDefault();

} 
// Mostrar el listado de usuarios cargados
function showUsers () {
    const contenido = document.querySelector(".content");
    contenido.innerHTML = "";
    const cabecera = document.createElement("ul")
    contenido.append(cabecera);
    for (let user of users) {
        let element = document.createElement("li");
        element.innerHTML = `Nombre: ${user.nombreUs} ${user.apellidoUs} - DNI: ${user.dni}`
        cabecera.append(element);
    }
}

//capturo las opciones del menu
const nuevoUsuario = document.getElementById('newUser');
nuevoUsuario.onclick = () => {newUser()};

const carteraUsuarios = document.getElementById('showUsers');
carteraUsuarios.onclick = () => {showUsers()};
