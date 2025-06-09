let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*for (let num of numeros){
    if (num % 2 === 0){
        console.log(`Numero: ${num}`);
    }
}*/

numeros.forEach((num, indice) => {
    console.log(`Índice ${indice}: ${num} ao quadrado é ${num * num}`);
});

/* Uma outra forma enxuta
numeros.filter(num => num % 2 === 0).forEach(num => {
    console.log(`Numero: ${num}`);
});*/