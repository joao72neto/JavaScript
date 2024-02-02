function tabuada(){
    //Pegando elementos
    var num = document.getElementById('num')
    var resp = document.getElementById('resp')

    //Gerando a tabuada

    num = Number(num.value)
    
    for(c=1; c <= 10; c++){
        resp.innerHTML += `${num} X ${c} = ${num * c} <br>`
    }
}