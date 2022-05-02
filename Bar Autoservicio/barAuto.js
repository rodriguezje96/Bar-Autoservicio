const pedidoFinal = [];
let cuentaFinal = 0;
let tabla = document.getElementById("productos");
let botonClientes = document.getElementById("btn-clientes");
let botonConfirmar = document.getElementById("btn-confirmar");
let tarjeta = document.querySelector("card col-md");
const productos = [];

fetch('productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const productosHTML = document.getElementById("productos")
        data.forEach((producto) => {
            productosHTML.appendChild(generarTarjeta(producto));
        })

    })

function generarTarjeta(producto) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardBtn = document.createElement('button');
    img.setAttribute('src', producto.imagen)

    card.classList.add('card', 'col-md-4')
    cardTitle.textContent = `${producto.name} $${producto.costo}`
    cardTitle.classList.add('card-title')
    cardText.textContent = `${producto.desc}`
    cardText.classList.add('card-text')
    cardBtn.textContent = `Agregar a mi pedido`
    cardBtn.classList.add('btn', 'btn-primary')
    
    cardBtn.addEventListener('click', function(){
        agregarProductoAlPedido(producto);
    })

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardBtn)

    card.appendChild(img)
    card.appendChild(cardBody)
    return card;
}

function confirmarClientes() {
    let clientes = document.getElementById("clientes").value;
    localStorage.setItem('clientesLS', JSON.stringify(clientes));
}
botonClientes.onclick = confirmarClientes;

function agregarProductoAlPedido(producto) {
    Swal.fire({
        title: 'Bien!',
        text: `Elegiste ${producto.name}. Costo $${producto.costo}.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    pedidoFinal.push(producto);
    cuentaFinal += producto.costo;
}


function agregarItemHTML(producto) {
    let row = document.createElement("tr");
    row.innerHTML = `<tr><th>${producto.name}</th><th>${producto.costo}</th></tr>`;
    tabla.append(row);

}

function crearProducto() {
    let nombre = `${producto.name}`;
    let precio = `${producto.costo}`;
    return new producto(nombre, precio);
}



function confirmarPedido() {

    let comensales = JSON.parse(localStorage.getItem('clientesLS'));
    let cadaUno = cuentaFinal / comensales;

    localStorage.setItem('ticketProductos', JSON.stringify(pedidoFinal));
    localStorage.setItem('ticketCF', JSON.stringify(cuentaFinal));
    localStorage.setItem('ticketCU', JSON.stringify(cadaUno));

}

botonConfirmar.onclick = confirmarPedido;



