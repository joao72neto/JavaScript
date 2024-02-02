function verificar(){
    var anoAtual = new Date().getFullYear()
    var ano = document.getElementById('ano')
    var resp = document.getElementById('resp')

    if(ano.value.length == 0 || ano > anoAtual){
        alert('Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - ano.value

        //criando uma imagem dinamicamente
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Pegando o sexo 

        var genero = ''

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.png')
            }else{
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-f.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto-f.png')
            }else{
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }

        resp.style.textAlign = 'center'
        img.style.paddingTop = '20px'
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        resp.appendChild(img)
    }
}