const productos = document.querySelectorAll('.producto');
const carrito = document.querySelector('#carrito');
const resumen = document.querySelector('.resumen-de-compra');

let subtotal = 0;
let impuestos = 0;
let total = 0;

productos.forEach(producto => {
    const agregarBoton = producto.querySelector('.agregar-al-carrito');
    agregarBoton.addEventListener('click', () => {
        const nombre = producto.querySelector('h3').textContent;
        const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));
        subtotal += precio;
        impuestos = subtotal * 0.1; // 10% de impuestos
        total = subtotal + impuestos;

        const productoEnCarrito = document.createElement('div');
        productoEnCarrito.classList.add('producto-en-carrito');
        productoEnCarrito.innerHTML = `
            <img src="producto1.jpg" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>Precio: $${precio.toFixed(2)}</p>
            <button class="eliminar-del-carrito">Eliminar</button>
        `;
        carrito.appendChild(productoEnCarrito);

        resumen.innerHTML = `
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>Impuestos: $${impuestos.toFixed(2)}</p>
            <p>Total: $${total.toFixed(2)}</p>
        `;

        const eliminarBoton = productoEnCarrito.querySelector('.eliminar-del-carrito');
        eliminarBoton.addEventListener('click', () => {
            carrito.removeChild(productoEnCarrito);
            subtotal -= precio;
            impuestos = subtotal * 0.1;
            total = subtotal + impuestos;
            resumen.innerHTML = `
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
                <p>Impuestos: $${impuestos.toFixed(2)}</p>
                <p>Total: $${total.toFixed(2)}</p>
            `;
        });
    });
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    
   
if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        
        currentIndex
updateSlider();
    }
});