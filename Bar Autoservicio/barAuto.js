const pedidoFinal = [];
let cuentaFinal = 0;
//let clientes = prompt("¿Cuántos van a comer?")
let tabla = document.getElementById("productos");
let botonClientes = document.getElementById("btn-clientes");
let botonConfirmar = document.getElementById("btn-confirmar")
const productos = [];

function cargarProductos() {
    fetch('productos.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            muestraProductos(respuesta);
            productos = respuesta;
        })
}

cargarProductos();

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

productos.forEach((producto) => {
    let boton = document.getElementById(producto.id);
    boton.onclick = () => {
        agregarProductoAlPedido(producto);
    };
})

