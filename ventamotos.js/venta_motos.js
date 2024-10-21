// Variables de ejemplo para productos
const motos = [
  { id: 1, name: "Yamaha R15", price: 15000, img: "yamaha_r15.jpg" },
  { id: 2, name: "Yamaha MT10", price: 20000, img: "yamaha_mt10.jpg" },
];

// Mostrar las motos destacadas en el home
function mostrarMotos() {
  const contenedorMotos = document.getElementById("motos-destacadas");
  motos.forEach((moto) => {
    const motoDiv = document.createElement("div");
    motoDiv.className = "moto-card";
    motoDiv.innerHTML = `
            <img src="img/${moto.img}" alt="${moto.name}">
            <h3>${moto.name}</h3>
            <p>Precio: $${moto.price}</p>
            <button onclick="comprarMoto(${moto.id})">Comprar</button>
        `;
    contenedorMotos.appendChild(motoDiv);
  });
}

// Función para simular la compra de una moto
function comprarMoto(id) {
  const moto = motos.find((m) => m.id === id);
  alert(`Has seleccionado la moto: ${moto.name}. Precio: $${moto.price}`);
}

// Carrusel de imágenes
let currentImage = 0;
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

function cambiarImagenCarrusel() {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("carrusel").src = `img/${images[currentImage]}`;
}

// Validación del formulario de login
function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "admin" && password === "1234") {
    alert("Inicio de sesión exitoso");
    window.location.href = "catalogo.html"; // Redireccionar al catálogo
  } else {
    alert("Credenciales incorrectas");
  }
}

// Ejecutar funciones al cargar la página
window.onload = function () {
  mostrarMotos();
  setInterval(cambiarImagenCarrusel, 3000); // Cambiar imagen cada 3 segundos
};

fetch('motos.json')
  .then(response => response.json())
  .then(data => {
    mostrarMotos(data.motos);
  })
  .catch(error => console.error('Error al cargar los datos:', error));

// Mostrar las motos en la página
function mostrarMotos(motos) {
  const contenedorMotos = document.getElementById('motos-destacadas');
  motos.forEach(moto => {
    const motoDiv = document.createElement('div');
    motoDiv.className = 'moto-card';
    motoDiv.innerHTML = `
      <img src="img/${moto.imagen}" alt="${moto.modelo}">
      <h3>${moto.marca} ${moto.modelo}</h3>
      <p>Precio: $${moto.precio}</p>
      <p>${moto.descripcion}</p>
      <button onclick="comprarMoto(${moto.id})">Comprar</button>
    `;
    contenedorMotos.appendChild(motoDiv);
  });
}

// Función para simular la compra de una moto
function comprarMoto(id) {
  alert(`Has seleccionado la moto con ID: ${id}`);
}
