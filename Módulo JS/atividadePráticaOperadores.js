// function calcular(num1,num2){
//     let soma = 0;
//     soma = num1 + num2;

//     return (num1 === num2) ? console.log(`Os números ${num1} e ${num2} são iguais`) : console.log(`Os números ${num1} e ${num2} não são iguais`),

//     console.log(`Sua soma é ${soma}`),

//     (num1 && num2 < 10) ? console.log('São menores do que 10') : console.log('Não são menores do que 10'),

//     (num1 && num2 < 20) ? console.log('São menores do que 20') : console.log('Não são menores do que 20');

// }

// calcular(1,2)
// calcular(5,5)

function validaNum(num){
    if (!num) return 'Envie um número válido'
    return num
}

validaNum();