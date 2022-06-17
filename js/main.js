

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

const dulces = [];
dulces.push(detallePedido1);
dulces.push(detallePedido2);
dulces.push(detallePedido3);
dulces.push(detallePedido4);

const pedido1 = new Pedido(new Date(), dulces);

console.log(pedido1.mostrarPedido());