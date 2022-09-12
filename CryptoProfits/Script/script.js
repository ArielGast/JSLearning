const investments= [];
const users = [];
let option = 0;
let userDni;
let userName;
let userSurname;

function User (nombreUs, apellidoUs, dni ) {
    this.nombreUs = nombreUs;
    this.apellidoUs = apellidoUs;
    this.dni = dni;
} 

function Invest (dni, nombre, cantidad, rendimiento) {
    this.dni = dni;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.rendimiento = rendimiento;
}

/* function ingNameAset () {
     const nameAset = prompt("Ingrese el nombre la cripto que posee: ");
    return nameAset;
}

function ingAmountAset () {
    const amountAset = Number(prompt("Ingrese la cantidad que posee de dicha cripto: "));
    while (isNaN(amountAset) == true) {
        amountAset = Number(prompt("Ingrese un número para la cantidad: "));
    }
    return amountAset;
}

function ingRateAset () {
    const rateAset = Number(prompt("Ingrese el rendimiento anual que posee de dicha cripto: "));
    while (isNaN(rateAset) == true) {
        rateAset = Number(prompt("Ingrese un número para el rendimiento: "));
    }
    return rateAset;
} */


function addInvest (userDni) {
        investments.push(new Invest(userDni, ingNameAset(), ingAmountAset(), ingRateAset()));
    return investments;
}

function consultInvest (doc) {
    users.forEach ( function search (user) { /* función para buscar usuario por nro DNI */
        if (user.dni == doc) {
            showInvest();
        } else {
            const wrapper = document.createElement("h2");
            wrapper.innerText = `Usuario no encontrado`
            document.body.append(wrapper);
        }
    }
    )
}

function showInvest () {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cabecera");
    wrapper.innerHTML = `<h2>Hola ${user.nombreUs} ${user.apellidoUs}</h2>
                         <p>Vamos a listar tu cartera Cripto:</p>`
    let items = investments.filter((inv) => inv.dni == doc); // filtro las inversiones para un mismo DNI 
    const list = document.createElement("ul");
    wrapper.append(list); 
    for (let item of items) {
        const element = document.createElement("li"); 
        element.innerHTML =`Crypto: ${item.nombre} - Cantidad: ${item.cantidad} - Rendimiento: ${item.rendimiento}% Anual`;
        list.append(element);
    }
    document.body.append(wrapper); 
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
    userName = document.getElementById("name");
    userSurname = document.getElementById("surName");
    userDni = document.getElementById("dni");
    const formulario = document.getElementById("form_usuario");
    formulario.addEventListener("submit", validarFormulario); 
    const enviar = document.getElementById('enviar_form');
    enviar.onclick = () => {
        users.push(new User(userName.value, userSurname.value, userDni.value));
        console.table(users);
    }
}


function validarFormulario (e) {
    e.preventDefault();

} 
const usuario = document.getElementById('newUser');
usuario.onclick = () => {newUser()};

/* while (option !=4) {
    option = Number(prompt("Bienvenido al módulo de Cartera de Inversiones!\n Elije una de las siguientes opciones \n1- Agregar nuevo usuario \n2- Agregar inversión \n 3- Consutlar Cartera\n 4- Salir"));
    switch (option) {
        case 1:
            newUser();
            break;
        case 2:
            ingUserDni();
            addInvest(userDni);
            break;
        case 3:
            ingUserDni();
            consultInvest(userDni);
            break;
        case 4:
            break;
        default:
            alert("Ingrese una opción válida");
            break;
    }
}
 */
