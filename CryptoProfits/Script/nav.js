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
