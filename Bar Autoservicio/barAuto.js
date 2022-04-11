
const pedidoFinal = [];
let cuentaFinal = 0;
let clientes = prompt("¿Cuántos van a comer?")
let pedido = prompt("Ingrese el número de su pedido: 1: Cerveza 2: Fernet 3: Papas Fritas");

function agregarProductoAlPedido(producto) {
    alert(`Elegiste ${producto.name}. Costo ${producto.costo}. Para finalizar ingresa ESC`)
    pedidoFinal.push(producto);
    cuentaFinal += producto.costo;
}

while (pedido != "ESC") {
    switch (pedido) {
        case "1":
            agregarProductoAlPedido({ name: 'Cerveza', costo: 300 });
            break;
        case "2":
            agregarProductoAlPedido({ name: 'Fernet', costo: 400 });

            break;
        case "3":
            agregarProductoAlPedido({ name: 'Papas Fritas', costo: 350 });

            break;
        default:
            alert("No tenemos esta opción, intenta otra vez.")
            break;
    }
    pedido = prompt("Ingrese otro pedido: 1: Cerveza 2: Fernet 3: Papas Fritas");
}
//Cuenta final por cada uno
let cadaUno = cuentaFinal / clientes;
alert("Total " + cuentaFinal);
alert("Cada uno paga " + cadaUno);
