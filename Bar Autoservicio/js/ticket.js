const ticketFinal = JSON.parse(localStorage.getItem('ticketProductos'));
let cuentaFinalTicket = JSON.parse(localStorage.getItem('ticketCF'));
let cadaUno = JSON.parse(localStorage.getItem('ticketCU'));
let comensales = JSON.parse(localStorage.getItem('clientesLS'));
let tabla = document.getElementById("productos");
let btnVaciar = document.getElementById("btn-vaciar");
let btnTerminar = document.getElementById("btn-terminar");
let btnBorrar = document.getElementById("btnBorrar");
let recibo = document.getElementById("recibo");

function agregarItemHTML(producto, idx) {
    let row = document.createElement("tr");
    row.innerHTML = `<tr><th>${producto.name}</th><th>$${producto.costo}
    </th>
    <th><button class="btn btn-danger" id="btnBorrar" onclick="eliminarProducto(${idx})">Eliminar</button></th></tr>
    </button>
    </tr>`;
    tabla.append(row);
}



function terminar() {

    Swal.fire({
        title: 'Confirmado!',
        text: `Espera en la mesa y te llevamos el pedido`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

}

btnTerminar.onclick = terminar;

btnVaciar.onclick = () => {
    localStorage.clear();
    location.reload();
}



function dibujarTabla() {
    ticketFinal.forEach((producto, idx) => {
        agregarItemHTML(producto, idx)
    }
    );
}

function eliminarProducto(idx) {
    tabla.innerHTML = "";
    producto = ticketFinal[idx];
    ticketFinal.splice(idx, 1);
    cuentaFinalTicket -= producto.costo;
    cadaUno = cuentaFinalTicket / comensales;
    localStorage.setItem('ticketProductos', JSON.stringify(ticketFinal));
    localStorage.setItem('ticketCF', JSON.stringify(cuentaFinalTicket));
    localStorage.setItem('ticketCU', JSON.stringify(cadaUno));
    dibujarTabla();

    document.getElementById("total").innerText = `El total es $${cuentaFinalTicket}`;
    document.getElementById("romana").innerText = `Cada uno paga $${cadaUno}`;
}

dibujarTabla();



document.getElementById("total").innerText = `El total es $${cuentaFinalTicket}`;
document.getElementById("romana").innerText = `Cada uno paga $${cadaUno}`;



