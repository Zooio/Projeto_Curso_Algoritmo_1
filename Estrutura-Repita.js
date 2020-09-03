/*
    sairLoop: caractere
    valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
        escreva("Digite o Primeiro valor: ")
        leia(valor01)
        escreva("Digite o Segundo valor: ")
        leia(valor02)
        escreval("Resultado: ", valor01 + valor02)
        escreval("Deseja Sair ? S/N")
        leia(sairLoop)
    ate sairLoop <> "N"
*/

function acaoBotao() {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o Primeiro valor: ")
        valor02 = prompt("Digite o Segundo valor: ")
        document.getElementById("Paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )     
        sairLoop = prompt("Deseja Sair ? S/N") 
    }while(sairLoop == "N")
}