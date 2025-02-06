// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


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
    
    for(i = 0; i< amigos.length; i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li)
    } 
}
