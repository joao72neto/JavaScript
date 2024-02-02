var agora = new Date()
var hora = agora.getHours();

console.log(`Agaora são exatamente ${hora} horas`)

if (hora < 6){
    console.log('Boa Madrugada')
}else if(hora < 12){
    console.log('Boa Manhã')
}else if(hora < 18){
    console.log('Taaaarde')
}else{
    console.log('Boa Noite')
}