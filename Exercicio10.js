function verificarMultiplo (number, number2){
    if (number % number2 === 0) {
        console.log(`${number} é multiplo de ${number2}`);
    } else {
        console.log(`${number} não é multiplo de ${number2}`);
    }
}

verificarMultiplo(10, 2);
verificarMultiplo(7, 3);