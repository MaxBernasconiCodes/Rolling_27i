let aulas = [0,0,0,0,0,0,0,0,0,0,0,0];

function calculoDeTotal(array_aulas)
{
    let resultado = 0;
    for(let i = 0; i < array_aulas.length; i++)
    {
        resultado += array_aulas[i];
    }
    return resultado;
}

/* ej 1 resuelto */ 

function apretarBoton(){
    alert('Se apreto el boton');
}

function tomarValor(id){
    return parseInt(document.getElementById(id).value);
}

function cambiarCantidadAlumnosenAula(aula,cantidadDeAlumnos){
    aulas[aula] = cantidadDeAlumnos;
}

function cambiarTotal()
{
    let textoTotal = document.getElementById('total');
    textoTotal.innerText = calculoDeTotal(aulas);
}

function ejecutarCambio(){
    let aula = tomarValor('aulaSeleccionada');
    let cantidad = tomarValor('cantidadDeAlumnos');
    cambiarCantidadAlumnosenAula(aula,cantidad);
    cambiarTotal();
}