
// const bienvenida = alert("Bienvenido/a al Despacho de Dulces");

// let fullName = prompt("Ingresá tu nombre completo");

// while (fullName === "" || !isNaN(fullName)) {
//     fullName = prompt("Error: Por favor, ingresá tu nombre completo");
// }

// let compraTotal = parseInt(prompt("Es un placer recibirte, " + fullName + ". A continuación, te solicitamos el importe total de tu compra"));

// while(isNaN(compraTotal)){
//     compraTotal = Number(prompt("Ingrese un número válido"));
// }

// let cuotas = 0;

// while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
//     cuotas = parseInt(prompt("Ingresá la cantidad de cuotas (3, 6 o 12)."));
//     if (cuotas != 3 && cuotas != 6 && cuotas != 12) {
//         alert("Inválido: las cuotas solo son de 3, 6 o 12");
//     } else {
//         alert("Elegiste " + cuotas + " " + "cuotas");
//     }
// }

// let calculoCuotas = 0;

// function calculo(compraTotal, cuotas) {
//     let calculoCuotas = compraTotal / cuotas;
//     return calculoCuotas;
// }

// let resultado = calculo(compraTotal, cuotas);

// alert("Tu compra de " + compraTotal + " queda en un total de " + cuotas + " cuotas de " + Math.round(resultado));


// function otraCompra(preguntaFinal) {
//     preguntaFinal = prompt("¿Desea realizar otra compra?");
//     if (preguntaFinal == "si" || preguntaFinal == "Si" || preguntaFinal == "SI"){
//         alert("Genial, te redireccionaremos para que puedas realizar otra compra.");
//     } else {
//         alert("Muchas gracias por tu compra, " + fullName + ", te esperamos pronto.")
//     }
// }

// const final = otraCompra();




// OBJETOS/ARRAYS/CLASES PARA APLICAR DESPUÉS EN DOM

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarProducto(){
        return this.nombre;
    }
}

const torta1 = new Producto("Oreo", 500);
const torta2 = new Producto("Chocotorta", 350);
const torta3 = new Producto("Tiramisú", 400);
const torta4 = new Producto("Tofi", 500);

class DetallePedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    subtotal(){
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    detalle(){
        return "-" + "x" + this.cantidad + " " + this.producto.mostrarProducto();
    }
}

const detallePedido1 = new DetallePedido(torta1, 3);
const detallePedido2 = new DetallePedido(torta2, 1);
const detallePedido3 = new DetallePedido(torta3, 2);
const detallePedido4 = new DetallePedido(torta1, 3);

class Pedido {
    constructor (fecha, detalles) {
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcTotal(){
        let total = 0;
        for (const detalle of this.detalles) {
            total = total + detalle.subtotal();
        }
        return total;
    }
    mostrarPedido(){
        let text = "";
        for (const detalle of this.detalles) {
            text = text + detalle.detalle() + "\n";
        }
        text = text + "Total: $" + this.calcTotal();
        return text;
    }
}

const tortas = [];
tortas.push(detallePedido1);
tortas.push(detallePedido2);
tortas.push(detallePedido3);
tortas.push(detallePedido4);

const pedido1 = new Pedido(new Date(), tortas);

console.log(pedido1.mostrarPedido());