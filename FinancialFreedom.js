let income;
let expenses;
let intRate;

function ingresos () {
    income = Number(prompt("Por favor indica cual es tu ingreso mensual: $  "));
    return income;
}

function egresos () {
    expenses = Number(prompt("Inidica cuales son tus egresos mensuales: $ "));
    return expenses;
}
function interes () {
    intRate = Number(prompt("Inidica cual es la tasa de interes anual que tienes disponible para invertir: "));
    if (intRate == 0) {
        alert("Ingrese una tasa de interes mayor que 0");
        return;
    }
    return intRate ;
}

function libertad (ahorro,gasto,int) { //calculo la libertad cuando el interes generado es igual al gasto mensual
    let interesGanado = 0;
    let month = 0;
    while (interesGanado <= gasto) {
        interesGanado = ahorro * 0.01*int/12;
        ahorro += interesGanado;
        month++;
    } 
    if (month/12 > 80) {
        alert("Lamento informarte que vas a tener que trabajar toda tu vida, tu libertad financiera llegaría a los " + Math.round(month/12) + " años");
    } else {
        alert("Felicitaciones!! Usted obtendra su libertad financiera en " + month + " meses ( " + Math.round(month/12) + " años aprox.) a la tasa de interes del " + int + "% anual");
    }
}

let savings = (a, b) => a - b;

ingresos();
egresos();

if (savings(income,expenses) <= 0) {
    alert("Lamentablemente no vamos a poder calcular tu libertad financiera, reacomoda tus ingresos / gastos y volvé a intentar")
} else {
    alert("Vamos a calcular el tiempo para obtener tu libertad financiera!")
    interes();
    libertad(savings(income,expenses),expenses,intRate);
}