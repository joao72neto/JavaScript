var valores = []

function adicionarVal(){
    //Pegando elementos
    var num = document.getElementById('num') 
    var sel = document.getElementById('selid')

    //Verificando o intervalo

    if(num.value >= 1 && num.value <= 100){

        if(valores.indexOf(num.value) == -1){
            //adicionando valores
            var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            sel.appendChild(item)
            valores.push(num.value)

            //Limpando análise após adicionar um valor
            resp.innerHTML = ''

            //Limpando número anterior
            num.value = ''
            num.focus()
        }else{
            window.alert(`Valor ${num.value} já inserido`)
        }

    }else if (num.value.length == 0){
        window.alert('Digite um valor')
    }else{
        window.alert('Digite apenas valores entre 1 e 100')
    }  

    return valores
}

function analisarVal(){
    //Pegando elementos
    var resp = document.getElementById('resp')


    //Analisando os dados
    var qtd = valores.length
    valores.sort()
    var maior = valores[qtd-1]
    var menor = valores[0]

    //Somando e tirando a média
    var soma = 0
    
    for(var i in valores){
        soma += parseInt(valores[i])
    }

    var media = soma / qtd
    
    //Exibindo os dados
    if(valores.length != 0){

        resp.innerHTML = `<p>Ao todo temos ${qtd} números cadastrados</p>`

        resp.innerHTML += `<p>O maior valor informado foi ${maior}</p>`

        resp.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

        resp.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`

        resp.innerHTML += `<p>A média dos valores é ${media}</p>`
    }else{
        window.alert("Insira um valor antes")
    } 
}

