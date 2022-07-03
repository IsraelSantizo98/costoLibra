// let precioProducto = document.getElementById('precioProducto').value;
// let  pesoProducto = document.getElementById('pesoProducto').value;
let resultadoTotal1 = 0;
let resultadoTotal2 = 0;
function calculadora1 (){
    const precioProducto1 = document.getElementById("precioProducto1").value;
    const pesoProducto1 = document.getElementById("pesoProducto1").value;
    const precioProducto2 = document.getElementById("precioProducto2").value;
    const pesoProducto2 = document.getElementById("pesoProducto2").value;
    resultadoTotal1 = (precioProducto1 / pesoProducto1);
    resultadoTotal2 = (precioProducto2 / pesoProducto2);
    // let pesoProducto = document.getElementById('pesoProducto').value;
    document.getElementById('resultado1').innerHTML = resultadoTotal1;
    document.getElementById('resultado2').innerHTML = resultadoTotal2;
    if(resultadoTotal1 < resultadoTotal2){
        console.log("El primer producto es mas barato");
        document.getElementById('comparativa').innerHTML = "El primer producto es más barato";
    }else{
        console.log("El segundo producto es mas barato");
        document.getElementById('comparativa').innerHTML = "El segundo producto es más barato";
    }
};
/*
function calculadora2 (){
    const precioProducto = document.getElementById("precioProducto2").value;
    const pesoProducto = document.getElementById("pesoProducto2").value;
    resultadoTotal2 = (precioProducto / pesoProducto);
    // let pesoProducto = document.getElementById('pesoProducto').value;
    document.getElementById('resultado2').innerHTML = resultadoTotal2;
};
*/
//resultado = (precioProducto / pesoProducto);