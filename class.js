class eleitor{
    constructor(nome, idade, titulo){
        this.nome = nome
        this.idade = idade 
        this.titulo = titulo
    }
    verificavoto(){
        let idade = this.idade
        console.log(idade)

        if (idade < 16) {
            console.log("abaixo da idade minima para votar")
            return "abaixo da idade minima para votar"

        } else if((idade >= 16)&&(idade <18)){
            console.log("voto facultativo")
            return " voto facultativo"

        } else if((idade>=18)&&(idade <= 70 )){
            console.log("voto obrigatorio")
            return " voto obrigatorio"

        } else if (idade > 70){
            console.log("voto facultativo")
            return " voto facultativo"
        }
    }
}