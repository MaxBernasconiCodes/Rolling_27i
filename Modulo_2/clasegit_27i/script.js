function saludar(){
    alert('Buenas');
}

// busca un elemento y reemplaza su valor
function setInputValue(id, value){
    let inputname = document.getElementById(id);
    inputname.value = value;}
/* 

Este es el commit de mis funciones

*/

function tomarInputPorId(id){
    let elemento = document.getElementById(id);
    return elemento;
}