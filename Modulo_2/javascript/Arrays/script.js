const arr1 = [];
//push para agregar // unshift
arr1.push(1);
arr1.push(2);
arr1.unshift(3);

// pop quitar // shift
arr1.pop();
arr1.shift();
console.debug(arr1);

////////////////////////////

const arr2 = [1, 2, 3, 4, 5, 6, 7,4,8, 9, 10];

//indexof busca el indice de un elemento en un arreglo
console.debug('busqueda')
arr2.splice(arr2.indexOf(4), 1); //quita x elementos desde la posicion dada

console.debug(arr2);

console.debug(arr2.find((x) => x == 6));

const arrObj1 = [
  {
    name: "nombre1",
    id: 1,
  },
  {
    name: "nombre2",
    id: 2,
  },
  {
    name: "nombre3",
    id: 3,
  },
  {
    name: "nombre3",
    id: 4,
  },
];

console.debug(arrObj1.findIndex(
    (objeto) => objeto.name === "nombre3"));

console.clear();

const usuarios = [
        {
          name: "Max",
          id: 1,
        },
        {
          name: "Alvaro",
          id: 2,
        },
        {
          name: "David",
          id: 3,
        },
        {
          name: "Sol Dahud",
          id: 4,
        },
        {
          name: "Sol Lopez",
          id: 5,
        },
        {
          name: "Juan",
          id: 6,
        },
        {
          name: "Nicolas",
          id: 10,
        },
];


function buscarNombre(id){
    let resultado =  usuarios.filter(usuario => usuario.id.toString().includes(id.toString()))
    return resultado;
}


function buscarPorId(id){
    let resultado = usuarios[usuarios.findIndex(x => x.id == id)];
    return typeof resultado !== 'undefined' ? resultado : {name:''};   
}

console.log(buscarNombre(1))
