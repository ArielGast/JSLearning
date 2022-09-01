carteras = [];
let namme;
let tag;
let amount;
let rate;

function cartera (nombre, tag, cantidad, rendimiento) {
    this.nombre = nombre;
    this.tag = tag;
    this.cantidad = cantidad;
    this.rendimiento = rendimiento;
}

function IngName () {
    namme = prompt("Ingrese el nombre la cripto que posee: ");
    return namme;
}

function IngTag () {
    tag = prompt("Ingrese el tag la cripto ingresada anteriormente: ").toUpperCase();
    return tag;
}

function IngAmount () {
    amount = Number(prompt("Ingrese la cantidad que posee de dicha cripto: "));
    while (isNaN(amount) == true) {
        amount = Number(prompt("Ingrese un número para la cantidad: "));
    }
    return amount;
}

function IngRate () {
    rate = Number(prompt("Ingrese el rendimiento anual que posee de dicha cripto: "));
    while (isNaN(rate) == true) {
        rate = Number(prompt("Ingrese un número para el rendimiento: "));
    }
    return rate;
}


alert("Bienvenido al módulo de Cartera de Inversiones!\n Vamos a almacenar tu Portfolio de inversiones");
IngName ();
while (namme != "esc") {
    IngTag();
    IngAmount();
    IngRate();
    carteras.push(new cartera (namme, tag, amount, rate));  
    alert("Si desea salir escriba \"esc\"");
    IngName(); 
}
console.table(carteras);
