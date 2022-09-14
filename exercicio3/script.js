// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas
// (soma, subtração, multiplicação e divisão).

function mais(n1,n2){
    let adicao =n1+n2
    console.log('adição:',adicao)
}
mais(3,7)

// ----------------------------

function menos(n1,n2){
    let subtração= n1-n2
    console.log('subtração:',subtração)
}
menos(14,7)

//----------------------------

function div (n1,n2){
    let divisao = n1 / n2
    console.log('divisão:',divisao)
}

div(15,3)

//----------------------------

function multi (n1,n2){
    let multiplicacao= n1 * n2
    console.log('multiplicação:',multiplicacao)
}

multi(15,3)

//----------------------------

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
// inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
console.log(" B ----------------" ,"PROMPT USARIO")

let userInput=Number(prompt("digite um numero:"))
let userInput2=Number(prompt("digite outro numero:"))


mais(userInput,userInput2)
menos(userInput,userInput2)
div(userInput,userInput2)
multi(userInput,userInput2)