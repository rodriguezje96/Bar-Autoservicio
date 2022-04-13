
const pedidoFinal = [];
let cuentaFinal = 0;
let clientes = prompt("¿Cuántos van a comer?")
//let pedido = prompt("Ingrese el número de su pedido: 1: Cerveza 2: Fernet 3: Papas Fritas");
let tabla = document.getElementById("productos");
let botonConfirmar = document.getElementById("btn-confirmar")
const productos = [
    { name: 'Cerveza', costo: 300, id: 'btn-cerveza' },
    { name: 'Fernet', costo: 400, id: 'btn-fernet' },
    { name: 'Papas Fritas', costo: 350, id: 'btn-papas' }];


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



//Cuenta final por cada uno




function confirmarPedido() {
    pedidoFinal.forEach((producto) => {
        agregarItemHTML(producto);
        let cadaUno = cuentaFinal / clientes;

        document.getElementById("total").innerText = `El total es ${cuentaFinal}`;

        document.getElementById("romana").innerText = `Cada uno paga ${cadaUno}`;
    });
}
botonConfirmar.onclick = confirmarPedido;

productos.forEach((producto) => {
    let boton = document.getElementById(producto.id);
    boton.onclick = () => { agregarProductoAlPedido(producto); };
})
