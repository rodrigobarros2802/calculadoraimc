//Função Calcular IMC
function calcularImc() {
    //Variáveis
    var peso = document.getElementById("kilo").value;
    var alt = document.getElementById("altura").value;
    var res = document.getElementById("res");
    var calculo = Math.floor(peso / (alt * alt));

    //Convertendo Inteiro para Float
    peso = parseFloat(peso);
    alt = parseFloat(alt);

    //Condição If e Else
    if (calculo < 18.5) {
        res.innerHTML = "Seu IMC é " + calculo + " Seu peso está baixo.";
    } if (calculo >= 18.5 && calculo <= 24.9) {
        res.innerHTML = "Seu IMC é " + calculo + " Seu peso está normal ou adequado.";
    } if (calculo >= 25 && calculo <= 29.9) {
        res.innerHTML = "Seu IMC é " + calculo + " Sobrepeso.";
    } if (calculo >= 30 && calculo <= 34.9) {
        res.innerHTML = "Seu IMC é " + calculo + " Obesidade Grau 1.";
    } if (calculo >= 35 && calculo <= 39.9) {
        res.innerHTML = "Seu IMC é " + calculo + " Obesidade Grau 2.";
    } else if (calculo >= 40) {
        res.innerHTML = "Seu IMC é " + calculo + " Obesidade Grau 3 ou Mórbida.";
    }
}

//Evento Clicar com Enter
document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const botao = document.querySelector("#calcular");
        botao.click();
    }
})
