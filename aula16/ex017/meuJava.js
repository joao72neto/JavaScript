function tabuada(){
    //Pegando elementos
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    //Verificando se num é diferente de 0
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)

        //Criando a tabuada dinaminamente

        tab.innerHTML = ' '

        for(i=0; i < 10; i ++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}