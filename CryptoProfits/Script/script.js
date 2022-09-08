const investments= [];
const users = [];
let option = 0;
let userDni;

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

function ingUserName () {
    const userName = prompt("Ingresea tu nombre: ");
    return userName;
}

function ingUserSurname () {
    const userSurname = prompt("Ingrese su apellido: ");
    return userSurname;
}

function ingUserDni () {
    userDni = Number(prompt("Ingrese su DNI sin puntos: "));
    while (isNaN(userDni) == true) {
        userDni = Number(prompt("Ingrese solo números: "));
    }
    return userDni;
}

function ingNameAset () {
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
}

function newUser () {
    return users.push(new User(ingUserName(),ingUserSurname(),ingUserDni()));
}

function addInvest (userDni) {
        investments.push(new Invest(userDni, ingNameAset(), ingAmountAset(), ingRateAset()));
    return investments;
}

function consultInvest (doc) {
    users.forEach ( function search (user) { /* función para buscar usuario por nro DNI */
        if (user.dni == doc) {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<h2>Hola ${user.nombreUs} ${user.apellidoUs}</h2>
                                 <p>Vamos a listar tu cartera Cripto:</p>`
            document.body.append(wrapper);
        } else {
            const wrapper = document.createElement("h2");
            wrapper.innerText = `Usuario no encontrado`
            document.body.append(wrapper);
        }
    }
    )
    let items = investments.filter((inv) => inv.dni == doc); /* filtro las inversiones para un mismo DNI */
    const list = document.createElement("ul");
    document.body.append(list); 
    for (let item of items) {
        const element = document.createElement("li"); 
        element.innerHTML =`Crypto: ${item.nombre} - Cantidad: ${item.cantidad} - Rendimiento: ${item.rendimiento}% Anual`;
        list.append(element);
    }
}

while (option !=4) {
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

