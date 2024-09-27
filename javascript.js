document.addEventListener('DOMContentLoaded', () => {
    const motos = [
        { id: 1, nombre: 'Moto 1', precio: 5000 },
        { id: 2, nombre: 'Moto 2', precio: 6000 },
        { id: 3, nombre: 'Moto 3', precio: 7000 }
    ];

    const motosContainer = document.getElementById('motos');

    motos.forEach(moto => {
        const motoElement = document.createElement('div');
        motoElement.classList.add('moto');
        motoElement.innerHTML = `
            <h2>${moto.nombre}</h2>
            <p>Precio: $${moto.precio}</p>
            <button onclick="agregarAlCarrito(${moto.id})">Agregar al carrito</button>
        `;
        motosContainer.appendChild(motoElement);
    });
});

function agregarAlCarrito(id) {
    alert(`Moto ${id} agregada al carrito`);
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('/motos')
    .then(response => response.json())
    .then(data => {
        const motosContainer = document.getElementById('motos-container');
        data.forEach(moto => {
            const motoElement = document.createElement('div');
            motoElement.innerHTML = `
                <h2>${moto.nombre}</h2>
                <p>Precio: $${moto.precio}</p>
                <p>Stock: ${moto.stock}</p>
            `;
            motosContainer.appendChild(motoElement);
        });
    });
});
