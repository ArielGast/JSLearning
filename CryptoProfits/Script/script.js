const investments= [];
const users = [];
let option = 0;
let userDni;

function user (nombreUs, apellidoUs, dni ) {
    this.nombreUs = nombreUs;
    this.apellidoUs = apellidoUs;
    this.dni = dni;
} 

function invest (dni, nombre, cantidad, rendimiento) {
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
    const userSurname = prompt("Ingrese su apellido: ").toUpperCase();
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
    return users.push(new user(ingUserName(),ingUserSurname(),ingUserDni()));
}

function addInvest (userDni) {
        investments.push(new invest(userDni, ingNameAset(), ingAmountAset(), ingRateAset()));
    return investments;
}

function consultInvest (doc) {
    users.forEach ( function search (user) {
        if (user.dni == doc) {
            console.log(user.nombreUs + " " + user.apellidoUs, "\n");
        }
    }
    )
    console.table(investments.filter((inv) => inv.dni == doc));
}

while (option !=4) {
    option = Number(prompt("Bienvenido al módulo de Cartera de Inversiones!\n Elije una de las siguientes opciones \n1- Agregar nuevo usuario \n2- Agregar inversión \n 3- Consutlar Cartera\n 4- Salir"));
    switch (option) {
        case 1:
            newUser();
            break;
        case 2:
            userDni = Number(prompt("Ingrese su DNI: "));
            addInvest(userDni);
            break;
        case 3:
            userDni = Number(prompt("Ingresa tu DNI para consultar tu cartea de inversiones: "));
            consultInvest(userDni);
            break;
        case 4:
            break;
        default:
            alert("Ingrese una opción válida");
            break;
    }
}

