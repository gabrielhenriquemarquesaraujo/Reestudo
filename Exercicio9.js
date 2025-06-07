function verificarSinal (number){
    if (number > 0) {
        return(`O numero ${number} é Positivo`);
    } else if (number < 0) {
        return(`O numero ${number} é Negativo`);
    } else {
        return(`Zero`);
    }
}

console.log(verificarSinal(10));
console.log(verificarSinal(-5));
console.log(verificarSinal(0));