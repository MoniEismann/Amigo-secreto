let amigos = [];

function adicionar() {
    let nomeAmigoObj = document.getElementById('nome-amigo'); //input nomeAmigo
    let nomeAmigo = nomeAmigoObj.value.toUpperCase();


    if(nomeAmigo == ''){
        alert('Digite um nome para adicionar!');
    } else if(amigos.includes(nomeAmigo)){
        alert('Este nome já foi adicionado!');
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('lista-amigos').textContent = amigos;
    }
    nomeAmigoObj.value = '';
}


function sortear() {
    if(amigos.length < 4){
        alert('É necessario no minimo 4 amigos!');
        
    } else {

        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++) {

            if ( i == amigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';

            } else {

            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
            }
        }
    }
}

function embaralha(lista) {
     for (let indice = lista.length; indice; indice--) {
            const indiceAleatorio = Math.floor(Math.random() * indice);
            
            const elemento = lista[indice - 1];
            
            lista[indice - 1] = lista[indiceAleatorio];
            
            lista[indiceAleatorio] = elemento;
        }
    }   

function reiniciar() {
    amigos = []
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}