/* Libreria de funciones */
const btnSuma = document.getElementById("btnSuma");
const result5 = document.getElementById("resultado5");
// Funciones que devuelven valores

// Funcion que sume 2 numero
function Suma(numero1=0, numero2=0){
    let suma = numero1 + numero2;
    return suma;
}

function Sumav2(numero1=0, numero2=0){
    let suma = numero1 + numero2;
    result5.innerText = suma;
}
// Procesos para la aplicacion

btnSuma.onclick = function(){
    Sumav2(1500, 1800);
}

// Funciones que NO devuelven valores


