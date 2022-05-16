let resultado = document.getElementById('resultado');

let arrayLetras = ['H','o','l','a',' ', 'c','o','r','n','u','d','o']



function deletrear(time)
{
   for(let i = 0; i< arrayLetras.length ; i++)
   {
       setTimeout(()=>{resultado.innerHTML += arrayLetras[i]},time*i);
       console.log(time*i);
   }
}

let intervalo;
function deletrearIntervalo(time){
    intervalo = setInterval(()=>{resultado.innerHTML += ' |_| '}, time);
}

function detenerIntervalo(){
    clearInterval(intervalo)
}

function arrancarIntervalo(){
    intervalo = setInterval(()=>{resultado.innerHTML += ' |_| '}, 300);
}