let peso = 200;
let altura = 1.74;
let calcularImc = peso / (altura * altura);

if (calcularImc < 18.5) {
    console.log("Seu peso está baixo.");
} if (calcularImc >= 18.5 && calcularImc <= 24.9) {
    console.log("Seu peso está normal ou adequado.");
} if (calcularImc >= 25 && calcularImc <= 29.9) {
    console.log("Sobrepeso");
} if (calcularImc >= 30 && calcularImc <= 34.9) {
    console.log("Obesidade Grau 1");
} if (calcularImc >= 35 && calcularImc <= 39.9) {
    console.log("Obesidade Grau 2");
} else if (calcularImc >= 40) {
    console.log("Obesidade Grau 3 ou Mórbida");
}
    
console.log(calcularImc);