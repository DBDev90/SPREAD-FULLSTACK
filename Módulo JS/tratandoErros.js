/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como
parâmetro na função. Caso contrário, um erro será lançado. Caso contrário, um erro será lançado.
Crie uma função que receba um array e um número
Realize as seguintes validações:
 - Se os parâmetros não rorem enviados, lance um erro do tipo ReferenceError;
 - Se o array não for do tipo 'object', lance um erro do tipo TypeError;
 - Se o número não for do tipo 'number', lance um erro do tipo TypeError;
 - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError.
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function verificaArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros');
        if (typeof array !== 'object') throw new TypeError('O array precisa ser do tipo Object');
        if (typeof num !== 'number') throw new TypeError('O parâmetro número precisa ser do tipo Number');
        if (array.length !== num) throw new RangeError('O tamanho do array não confere com o tamanho do parâmetro');

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Esse erro é do tipo ReferenceError');
            console.log(error.message);
        }
        else if (error instanceof TypeError) {
            console.log('Esse erro é do tipo TypeError');
            console.log(error.message);
        }
        else if (error instanceof RangeError) {
            console.log('Esse erro é do tipo RangeError');
            console.log(error.message);
        }
    }
};

// console.log(verificaArray());
// console.log(verificaArray(5, 5));
// console.log(verificaArray([], '5'));
// console.log(verificaArray([], 5));
console.log(verificaArray([1, 2, 3, 4, 5], 5));