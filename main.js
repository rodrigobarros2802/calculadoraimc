let peso = 50;
let altura = 1.74;
let calcularImc = peso / (altura * altura);

if(calcularImc < 18.5) {
    console.log("Seu peso está baixo.");
}if (calcularImc > 18.5 || calcularImc < 24.9) {
    console.log("Seu peso está normal ou adequado.");
} 


console.log(calcularImc);