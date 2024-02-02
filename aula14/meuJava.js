function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes();
    
    //hora = 6

    msg.innerText = `Agora são ${hora}:${min}`

    if(hora < 6){
        img.src = 'imagens/madrugada.png'
        window.document.body.style.background = '#0a090f'
    }else if(hora < 12){
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#e0b384'
       
    }else if(hora < 18){
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#feb711'
    }else{
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#051935'
    }
    
}

