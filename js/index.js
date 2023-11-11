const body = document.querySelector('body');

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
let numeroSorteado = gerarNumeroAleatorio(1, 9);
console.log(numeroSorteado);
  
function sortearItem(lista) {
    const indiceSorteado = gerarNumeroAleatorio(0, lista.length);
    return lista[indiceSorteado];
}
  
const temas = ["fundo1.jpg", "fundo2.jpg", "fundo3.jpg", "fundo4.jpg", "fundo5.jpg", "fundo6.jpg", "fundo7.jpg", "fundo8.jpg", "fundo9.jpg"];
let temaSorteado = sortearItem(temas);

body.style.backgroundImage = `url('../img/${temaSorteado}')`;
