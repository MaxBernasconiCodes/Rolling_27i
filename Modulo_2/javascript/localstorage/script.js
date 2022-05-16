const listado = JSON.parse(localStorage.getItem('listaLocal'));
let inputInsercion = document.getElementById("texto");
let ulListado = document.getElementById("listado");

function insertar() {
  if (inputInsercion.value.length != 0) {
      //agrega a lista
    //pasa valor a localstorage
    let newItemALocal = {
        name : inputInsercion.value
    }
    listado.push(newItemALocal);
    localStorage.setItem('listaLocal', JSON.stringify(listado) );


    //muestrra en consola
    console.group();
    console.debug(listado);
    console.debug(localStorage.getItem('item'))
    console.groupEnd();
    //limpieza de input
    inputInsercion.value = "";
    inputInsercion.focus();
  } else {
    console.debug("Escribi primero algo guacho!");
  }
}

function recargar() {
    ulListado.innerHTML = '';
    ulListado.append(localStorage.getItem('listaLocal'));
    let valorLocalStorage = JSON.parse(localStorage.getItem('listaLocal'));
    valorLocalStorage.forEach((item, index) =>{
        let newElement = document.createElement('li');
        newElement.setAttribute('id', 'listado_'+ index);
        newElement.className = 'item-listado';
        newElement.classList.add('azul');
        newElement.style.color = 'red';
        newElement.append(item.name + ' | ' + index);
        ulListado.append(newElement);
    });
}

let objetos = [{
    llave : 'valor',
    llavenumero : 0,
    llavebool: true
},
{
    llave : 'valor1',
    llavenumero : 1,
    llavebool: false
}
]
console.debug(objetos);
console.debug(JSON.parse(JSON.stringify(objetos)));
console.debug(objetos[0]);
console.debug(objetos[1]);