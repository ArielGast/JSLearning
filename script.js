let symbol;
let esp = " ";
let option = Number(prompt("Vamos a dibujar formas... Elije una opción:\n 1-Triángulo\n 2-Cuadrado\n 3-Rectánuglo \n 4-Salir" ));
do {
    switch (option) {
        case 1:
            let height = Number(prompt("Ingrese la altura del triángulo que desea dibujar: "));
            symbol = prompt("Ingresa un caracter con el cual pintar el triángulo: ")
            for (let i = 1; i <= height; i++) {
                console.log(esp.repeat(height - i) + symbol.repeat(i * 2- 1));
            }
            break;
        case 2:
            let size = Number(prompt("Ingrese el valor del lado del cuadrado que desea dibujar: "));
            symbol = prompt("Ingresa el caracter con el cual pintar el cuadrado: ")
            let esp_count_bf = 0;
            let esp_count_af = 0;
            for (let i = 1; i <= size; i++){
                if (i == 1 || i == size) {
                    console.log(symbol.repeat(size));
                } else {
                    esp_count_af = size - 3 - esp_count_bf;
                    console.log(symbol + esp.repeat(esp_count_bf)+ symbol + esp.repeat(esp_count_af) + symbol);
                    esp_count_bf+=1;
                }
            }
            break;  
        case 3:
            let base = Number(prompt("Ingresa la base del rectángulo que desea dibujar: "));
            /* let height_rec = Number(prompt(" Ahora ingresá la altura: ")); */
            let height_rec = Math.trunc(base / 2);
            symbol = prompt("Ingresa un caracter con el cual pintar el rectángulo: ")
            let esp_count = base - 4;
            for (let i = 1; i <= height_rec; i++) {
                if (i == 1 || i == base) {
                    console.log(symbol.repeat(base));
                } else {
                    console.log(symbol.repeat(i) + esp.repeat(esp_count) + symbol.repeat(i));
                    esp_count-=2;
                }
            }
            break;
        case 4:
            break;
        default:
            alert("Elije una opción válida");     

    }
    option = Number(prompt("Vamos a dibujar formas... Elije una opción:\n 1-Triángulo\n 2-Cuadrado\n 3-Rectánuglo \n 4-Salir" ));
}while(option !==4);


    
