function contar(){
    //Pegando os elementos
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pass')
    var resp = document.getElementById('resp')

    //Verificando se há caxas não preenchidas

    inicio = inicio.value 
    fim = fim.value 
    passo = passo.value 

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('Digite todos os valores')
        resp.innerHTML = 'Impossível contar!'
    }else{

        resp.innerHTML = `Contador: <br>`

        var i = Number(inicio)
        var p = Number(passo)
        var f = Number(fim)


        if(p < 1){
            p = 1
            alert('Passo inválido! Considerando passo igual a 1')
        }

        if(i > f){
            for(var c=i; c > f; c--){
                resp.innerHTML += `${i} \u{1f449}`
                i--;
            }
        }else{
            for(var c=i; c < f; c++){
                resp.innerHTML += `${i} \u{1f449}`
                i++;
            }
        }
        
        resp.innerHTML += `${i} \u{1f3c1}`

    }

}