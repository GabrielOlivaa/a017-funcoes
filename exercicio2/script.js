//a) Uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.


function somaNumeros (n1,n2){
    let soma = (n1 +n2)
    console.log(soma)

}

somaNumeros(2,3)


//b) Uma função que recebe 2 números e imprime um booleano 
//que informa se o primeiro número é **maior ou igual** ao segundo.

function primeiroMaiorNum (n1,n2){
    let maior = (n1 > n2)
    console.log(maior)

}
primeiroMaiorNum(4,3)

// c) Uma função que receba um número e imprima se ele é par ou não

function numeroPar (n1){
    let par= (n1 %2 === 0)
    console.log(par)
}
numeroPar(4)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
//  juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem (string){
    let texto = string
    console.log(texto.length, texto.toUpperCase())


}
mensagem("ola bom dia")