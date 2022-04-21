
const pedidoFinal = [];
let cuentaFinal = 0;
//let clientes = prompt("¿Cuántos van a comer?")
let tabla = document.getElementById("productos");
let botonClientes = document.getElementById("btn-clientes");
let botonConfirmar = document.getElementById("btn-confirmar")
const productos = [
    { name: 'Andes Rubia', costo: 300, id: 'btn-cerveza-rubia' },
    { name: 'Andes IPA Roja', costo: 300, id: 'btn-cerveza-roja' },
    { name: 'Andes IPA', costo: 300, id: 'btn-cerveza-ipa' },
    { name: 'Fernet', costo: 400, id: 'btn-fernet' },
    { name: 'Mojito', costo: 500, id: 'btn-mojito' },
    { name: 'Daikiri', costo: 500, id: 'btn-daikiri' },
    { name: 'Papas Fritas', costo: 350, id: 'btn-papas' },
    { name: 'Pizza', costo: 700, id: 'btn-pizza' },
    { name: 'Tequeños', costo: 400, id: 'btn-tequeño' }
];

function confirmarClientes() {
    let clientes = document.getElementById("clientes").value;
    localStorage.setItem('clientesLS', JSON.stringify(clientes));
}
botonClientes.onclick = confirmarClientes;

function agregarProductoAlPedido(producto) {

    alert(`Elegiste ${producto.name}. Costo ${producto.costo}.`)
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
    pedidoFinal.forEach((producto) => {
        agregarItemHTML(producto)
        let comensales = JSON.parse(localStorage.getItem('clientesLS'));
        let cadaUno = cuentaFinal / comensales;

        document.getElementById("total").innerText = `El total es ${cuentaFinal}`;
        document.getElementById("romana").innerText = `Cada uno paga ${cadaUno}`;

        localStorage.setItem('ticketProductos', JSON.stringify(pedidoFinal));
        localStorage.setItem('ticketCF', JSON.stringify(cuentaFinal));
        localStorage.setItem('ticketCU', JSON.stringify(cadaUno));

    });
}
botonConfirmar.onclick = confirmarPedido;

productos.forEach((producto) => {
    let boton = document.getElementById(producto.id);
    boton.onclick = () => {
        agregarProductoAlPedido(producto);
    };
})