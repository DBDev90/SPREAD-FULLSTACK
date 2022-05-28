// MAP COM THIS
console.log('MAP')
const maca = {
    value: 2
};

const laranja = {
    value: 3
};

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg)
};

const arrayValores = [1, 2];

console.log('This -> maçã:', mapComThis(arrayValores, maca));
console.log('This -> laranja:', mapComThis(arrayValores, laranja));

// MAP SEM THIS
function mapSemThis(array) {
    return array.map(function (item) {
        return item * 2;
    });
};

const arrayNums = [2, 4, 6, 8, 10];

console.log('Map sem This ->', mapSemThis(arrayNums));

// FILTER
console.log('FILTER');
function filtraPares(array) {
    return array.filter(callback);
};
function filtraInpares(array) {
    return array.filter(callback2);
};

function callback(item) {
    return item % 2 === 0;
};

function callback2(item) {
    return item % 2 !== 0;
};

const meuArray = [1, 3, 55, 15, 30, 2, 4];

console.log('Números pares ->', filtraPares(meuArray));
console.log('Números ínpares ->', filtraInpares(meuArray));

// REDUCE
console.log('REDUCE');
function somaValores(array) {
    return array.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;

    }, 0);
};

const valoresDaSoma = [1, 2];

console.log(somaValores(valoresDaSoma));

const lista = [
    {
        nome: 'Sabão',
        preco: 30
    },
    {
        nome: 'Cereal',
        preco: 12
    },
    {
        nome: 'Toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('Item atual', index);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    },saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel,lista));