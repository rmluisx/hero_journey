/*## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) 
de um herói, depois utilize uma estrutura de decisão para 
apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
let nomeHeroi = "josé Aglidailson da Silva "
let xpLevel = 12500 
let tipoNivel = ""

// determinar os níveis de xp:
if (xpLevel <= 1000){
    tipoNivel = "Ferro"
} 
else if (xpLevel > 1000 &&  xpLevel <= 2000) {
    tipoNivel = "Bronze"
}
else if (xpLevel > 2000 &&  xpLevel <= 5000) {
    tipoNivel = "Prata"
}
else if (xpLevel > 5000 &&  xpLevel <= 7000) {
    tipoNivel = "Ouro"
}
else if (xpLevel > 7000 &&  xpLevel <= 8000) {
    tipoNivel = "Platina"
}
else if (xpLevel > 8000 &&  xpLevel <= 9000) {
    tipoNivel = "Ascendente"
}
else if (xpLevel > 9000 &&  xpLevel <= 10000) {
    tipoNivel = "Imortal"
}
else {
    tipoNivel = "Radiante"
}
// seleção de cada nível determinado
switch (tipoNivel)
{    
    case "Ferro": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break; 

    case "Bronze": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break; 

    case "Prata": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break;

    case "Ouro": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break;  

    case "Platina": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break; 

    case "Ascedente": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break; 

    case "Imortal": 
    //console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    //break;

    case "Radiante": 
    console.log("O Herói de nome " +nomeHeroi+" está no nível de "+tipoNivel);
    break; 
}
 