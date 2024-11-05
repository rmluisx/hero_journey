/*
## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
let vitorias = 200 
let derrotas = 10
let saldoVitorias = calcSaldo(vitorias,derrotas)
let nivelHeroi = calcNivel()

function calcSaldo (){
    return vitorias - derrotas ;
}

function calcNivel(){
  if (saldoVitorias <= 10) {
       return "Ferro" 
  }
  else if (saldoVitorias > 10 && saldoVitorias <= 20){
    return "bronze"
  }
  else if (saldoVitorias > 20 && saldoVitorias <= 50){
    return "Prata"
  }
  else if (saldoVitorias > 50 && saldoVitorias <= 90){
    return "Ouro"
  }
  else if (saldoVitorias > 80 && saldoVitorias <= 80){
    return "Diamante"
  }
  else if (saldoVitorias > 90 && saldoVitorias <= 100){
    return "Lendário"
  }
  else{
    return "Imortal"
  }
}
console.log("O Herói tem de saldo de "+ saldoVitorias+ " está no nível de "+ nivelHeroi)