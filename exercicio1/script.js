// A) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function OlaSeuNome (nome){

// console.log(`Ola: ${nome}`)

// }

// OlaSeuNome("Gabriel")

// B) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada (array){
//       for( let i= 1 ; i< 11; i++)
    
    
//     console.log(arrayTeste + 'x' + i +'=' +arrayTeste*i )

// }

// const arrayTeste= [6]
// console.log(tabuada(arrayTeste))


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__



let seuNome = (nome) =>{
    const name= nome
    console.log(name)
}
seuNome("gabriel")

// ---------------------------------------------------------



let tabuada = (Array) =>{
    for( let i= 1 ; i< 11; i++)
    console.log(arrayTeste + 'x' + i +'=' +arrayTeste*i )
}
const arrayTeste= [10]
console.log(tabuada(arrayTeste))