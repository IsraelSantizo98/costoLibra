// let precioProducto = document.getElementById('precioProducto').value;
// let  pesoProducto = document.getElementById('pesoProducto').value;
function obtenerDatos (){
    let precioProducto = document.getElementById("precioProducto").value;
    let pesoProducto = document.getElementById("pesoProducto").value;
    let resultado;
    resultado = (precioProducto / pesoProducto);
    // let pesoProducto = document.getElementById('pesoProducto').value;
    document.getElementById('resultado').innerHTML = resultado;
}
//resultado = (precioProducto / pesoProducto);