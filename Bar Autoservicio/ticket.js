const ticketFinal = JSON.parse(localStorage.getItem('ticketProductos'));
let cuentaFinalTicket = JSON.parse(localStorage.getItem('ticketCF'));
let cadaUno = JSON.parse(localStorage.getItem('ticketCU'));
let tabla = document.getElementById("productos");

document.getElementById("total").innerText = `El total es ${cuentaFinalTicket}`;
document.getElementById("romana").innerText = `Cada uno paga ${cadaUno}`;

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


ticketFinal.forEach(producto => {
    agregarItemHTML(producto)
    document.getElementById("total").innerText = `El total es ${cuentaFinalTicket}`;
    document.getElementById("romana").innerText = `Cada uno paga ${cadaUno}`;
}
);

