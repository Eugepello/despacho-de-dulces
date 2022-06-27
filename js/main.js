
// CARRITO & PRODUCTOS

let cart

const stock = document.getElementById("stockContainer");

const carritoDiv = document.getElementById("cart")

const addCart = document.getElementsByClassName("addCartBtn")

if (JSON.parse(localStorage.getItem("cart"))) {
  cart = JSON.parse(localStorage.getItem("cart"))
} else{
  localStorage.setItem("cart", JSON.stringify([]))
  cart = JSON.parse(localStorage.getItem("cart"))
}

function stockProductos(){
  productos.forEach((item) => {
    stock.innerHTML += `
    <div class="card">
      <img src="${item.img}" class="img-fluid">
      <div class="card-body"
        <p>${item.categoria}</p>
        <h3">${item.nombre}</h3>
        <p>$${item.precio}</p>
        <button class="btn btn-dark addCartBtn" id="${item.id}">Agregar al carrito</button>
      </div>
    </div>`
  });
}

stockProductos()


for (let i = 0; i < addCart.length; i++) {
  const add = addCart[i]
  add.addEventListener("click", agregarAlCarrito)
}


function agregarAlCarrito(e) {
  const boton = e.target;
  const idBoton = boton.getAttribute("id")
  const findProduct = productos.find(product => product.id == idBoton)
  const inCart = cart.find(product => product.id == findProduct.id)
  if (!inCart) {
    cart.push({...findProduct, cantidad: 1})
  } else {
    let filtrar = cart.filter(product => product.id != inCart.id)
    cart = [...filtrar, {...inCart, cantidad: inCart.cantidad + 1}]
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart))
}


const total = () => {
  return cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
}

if (cart.length == 0) {
  const empty = `<h2 class="cartText">El carrito está vacío</h2>`
  carritoDiv.innerHTML += empty
} else {
  const grilla = `
  <div class="grillaContainer">
		<table>
			<thead>
				<tr>
          <th></th>
          <th class="textGrilla">PRODUCTOS</th>
          <th class="textGrilla">CANTIDAD</th>
          <th class="textGrilla">PRECIO</th>
        </tr>
			</thead>
			<tbody id="bodyGrilla">
			</tbody>
			<tfoot>
				<tr>
				  <th></th>
	        <th></th>
				  <th class="txtTotal">Total:</th>
				  <th id="total">$${total()}</th>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="btn-container">
		<button class="btn btn-dark">FINALIZAR COMPRA</button>
	</div>`

  carritoDiv.innerHTML += grilla
  const bodyGrilla = document.getElementById("bodyGrilla");

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    const {id, nombre, img, precio, cantidad} = element;
    const carrito = `
    <tr id=${id}>
			<th><img class="img-fluid" src=${img}></th>
			<th><span>${nombre}</span></th>
			<th>${cantidad}</th>
			<th>$${(cantidad * precio)}</th>
		</tr>`

    bodyGrilla.innerHTML += carrito
  }
}