let amigo = {
nome:"joao", 
sexo:"m", 
idade:19,
envelhecer(i=0){
    console.log("Envelheceu")
    this.idade += i
}}

amigo.envelhecer(10)
console.log(`${amigo.nome} tem ${amigo.idade} anos de idade`) 

