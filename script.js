let num1 = Number(prompt("Ingresa un número: "));
let num2 = Number(prompt("Ingresá un segundo número: "));

if (num1 > num2) {
    alert("El mayor de los número ingresados, "+ num1 +" y " + num2 +" es: " + num1);
} else if (num1 == num2) {
    alert("Los números ingresados son iguales");
} else {
    alert ("El mayor de los números ingresado, "+ num1 +" y " + num2 +" es: " + num2);
}