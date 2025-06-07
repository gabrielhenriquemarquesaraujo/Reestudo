function calcularMedia(number, number2, number3){
    let medial = number + number2 + number3;
    let media = medial / 3;

    if (media >= 7) {
        console.log(`Media ${media} --- Aprovado`);
    } else if (5 <= media && media <= 6.9) {
        console.log(`Media ${media} --- Recuperação`);
    } else if (media <= 4.9) {
        console.log(`Media ${media} --- Reprovado`);
    }
}

calcularMedia(8, 7, 9);  
calcularMedia(6, 5, 5);
calcularMedia(3, 4, 2);