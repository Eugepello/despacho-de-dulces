//Array de objetos: PRODUCTOS

const productos = [{
  id: 1,
  nombre: "Oreo",
  categoria: "Tortas",
  precio: 2700,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/oreo.jpg"
},{
  id: 2,
  nombre: "Chocotorta",
  categoria: "Tortas",
  precio: 2300,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/chocotorta.jpg"
},{
  id: 3,
  nombre: "Tiramisú",
  categoria: "Tortas",
  precio: 2200,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/tiramisu.jpg"
},{
  id: 4,
  nombre: "Lemon Pie",
  categoria: "Tortas",
  precio: 2800,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/lemonpie.jpg"
},{
  id: 5,
  nombre: "Marquise",
  categoria: "Tortas",
  precio: 3000,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/marquise.jpg"
},{
  id: 6,
  nombre: "Raspberry Cheesecake",
  categoria: "Tortas",
  precio: 3200,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/raspberry.jpg"
},{
  id: 7,
  nombre: "Vainilla",
  categoria: "Muffins",
  precio: 500,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/vainilla.jpg"
},{
  id: 8,
  nombre: "Chocolate intenso",
  categoria: "Muffins",
  precio: 700,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/chocolateintenso.jpg"
},{
  id: 9,
  nombre: "Marmolado",
  categoria: "Muffins",
  precio: 600,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/marmolado.jpg"
},{
  id: 10,
  nombre: "Orange Glaze",
  categoria: "Muffins",
  precio: 750,
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt praesentium quia esse! Corporis, inventore sed cupiditate delectus quibusdam minima ea minus, laudantium quos incidunt molestiae adipisci. Ipsum, incidunt nobis!",
  img: "./assets/img/orangeglaze.jpg"
}]


//RECIBIMIENTO

const titulo = document.getElementById("titulo");

function recibimiento() {
  const bienvenida = document.createElement("div");
  bienvenida.innerHTML = `<h2 class="welcome">¡Bienvenido/a al Despacho de Dulces!</h2>`
  titulo.appendChild(bienvenida)
}

recibimiento()


//PRODUCTOS

let carrito = [];

const mainDiv = document.getElementById("mainDiv")

function stockProductos(){
  productos.forEach((item) => {
    const stock = document.createElement("div")
    stock.setAttribute("class", "stockContainer")
    stock.innerHTML = `
    <div class="card h-100">
    <img src="${item.img}" class="img-fluid">
    <div class="card-body"
    <p>${item.categoria}</p>
    <h3>${item.nombre}</h3>
    <p class="price">$${item.precio}</p>
    <button type="button" class="btn btn-primary addCartBtn">Agregar al carrito</button>
    </div>
    </div>`

    mainDiv.appendChild(stock)
  })
};

stockProductos()

