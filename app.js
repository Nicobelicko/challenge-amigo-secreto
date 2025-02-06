// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let lista = document.getElementById('listaAmigos')
let lista_amigo_secreto = document.getElementById('resultado')


function agregarAmigo(){
    nombre = document.getElementById('amigo').value;
    if(nombre === ''){
        alert('Por favor, inserte un nombre.')
    }
    else{
        amigos.push(nombre)
        limpiar_input()
        mostrar_lista_amigos()
    }
}

function limpiar_input(){
    input = document.getElementById('amigo')
    input.value = '';
}

function mostrar_lista_amigos(){
    limpiar_lista_amigos()
    limpiar_amigo_secreto()
    for(i = 0; i< amigos.length; i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li)
    } 
}

function limpiar_lista_amigos(){
    lista.innerHTML = ""
}
function limpiar_amigo_secreto(){
    lista_amigo_secreto.innerHTML = ""
}
function sortearAmigo(){
    var indice_aleatorio = Math.floor(Math.random()*amigos.length);
    var amigo_secreto = amigos[indice_aleatorio]
    var resultado = `El amigo secreto sorteado es: ${amigo_secreto}`
    
    limpiar_lista_amigos()
    lista_amigo_secreto.innerHTML = resultado
}