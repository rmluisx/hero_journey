const { read } = require('fs')

/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/
class heroClasse {
    constructor(nome,idade,tipo,ataque) {
        this.nome = nome               //não mexo
        this.idade = idade             //não mexo
        this.tipo = tipo              // 4 tipos: guerreiro, mago, monge, ninja
        this.ataque = ataque           // 4 tipos : espada, magia, artes marciais, shuriken 
    }
    displayAttack(){
        console.log( `O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
const warrior1 = new heroClasse ("NONAME",12,"guerreiro","espada")
const warrior2 = new heroClasse ("NONAME",12,"mago","magia")
const warrior3 = new heroClasse ("NONAME",12,"monge","artes marciais")
const warrior4 = new heroClasse ("NONAME",12,"ninja","shuriken")
console.log(" ")
warrior1.displayAttack()
console.log(" ")
warrior2.displayAttack()
console.log(" ")
warrior3.displayAttack()
console.log(" ")
warrior4.displayAttack()