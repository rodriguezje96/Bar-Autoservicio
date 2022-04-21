const pedidoFinal = JSON.parse(localStorage.getItem('ticketProductos'));
let cuentaFinal = JSON.parse(localStorage.getItem('ticketCF'));
let cadaUno = JSON.parse(localStorage.getItem('ticketCU'));
let tabla = document.getElementById("productos");


console.dir(pedidoFinal);


document.getElementById("total").innerText = `El total es ${cuentaFinal}`;
document.getElementById("romana").innerText = `Cada uno paga ${cadaUno}`;

for (const iterator of pedidoFinal) {
    console.log(iterator);
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


pedidoFinal.forEach(producto => agregarItemHTML(producto));