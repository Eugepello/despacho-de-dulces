
const bienvenida = alert("Bienvenido/a al Despacho de Dulces");

let fullName = prompt("Ingresá tu nombre completo");

while (fullName === "" || !isNaN(fullName)) {
    fullName = prompt("Error: Por favor, ingresá tu nombre completo");
}

let compraTotal = parseInt(prompt("Es un placer recibirte, " + fullName + ". A continuación, te solicitamos el importe total de tu compra"));

while(isNaN(compraTotal)){
    compraTotal = Number(prompt("Ingrese un número válido"));
}

let cuotas = 0;

while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
    cuotas = parseInt(prompt("Ingresá la cantidad de cuotas (3, 6 o 12)."));
    if (cuotas != 3 && cuotas != 6 && cuotas != 12) {
        alert("Inválido: las cuotas solo son de 3, 6 o 12");
    } else {
        alert("Elegiste " + cuotas + " " + "cuotas");
    }
}

let calculoCuotas = 0;

function calculo(compraTotal, cuotas) {
    let calculoCuotas = compraTotal / cuotas;
    return calculoCuotas;
}

let resultado = calculo(compraTotal, cuotas);

alert("Tu compra de " + compraTotal + " queda en un total de " + cuotas + " cuotas de " + Math.round(resultado));


function otraCompra(preguntaFinal) {
    preguntaFinal = prompt("¿Desea realizar otra compra?");
    if (preguntaFinal == "si" || preguntaFinal == "Si" || preguntaFinal == "SI"){
        alert("Genial, te redireccionaremos para que puedas realizar otra compra.");
    } else {
        alert("Muchas gracias por tu compra, " + fullName + ", te esperamos pronto.")
    }
}

const final = otraCompra();




// OBJETOS/ARRAYS/CLASES PARA APLICAR DESPUÉS EN DOM

class Productos {
    constructor (nombre, precio){
        this.nombre = nombre,
        this.precio = precio
    }
}

const producto1 = new Productos("Oreo", 500);
const producto2 = new Productos("Chocotorta", 350);
const producto3 = new Productos("Tiramisú", 400);
const producto4 = new Productos("Tofi", 500)

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);



class Total {
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    totalCompra() {
        let precioTotal = this.producto.precio * this.cantidad;
        let iva = precioTotal * 21 / 100;
        return precioTotal + iva;
    }
}

const total1 = new Total(producto1, 2);
const total2 = new Total(producto2, 5);
const total3 = new Total(producto3, 3);
const total4 = new Total(producto4, 7);

console.log(total1.totalCompra());
console.log(total2.totalCompra());
console.log(total3.totalCompra());
console.log(total4.totalCompra());

