    let peso = document.querySelector("#calcular");
    peso.addEventListener("click", function(e) {
        e.preventDefault();
        let kilo = document.querySelector("#kilo");
        let valorKg = kilo.value;
        console.log(valorKg);
    })

    let alt = document.querySelector("#calcular");
    alt = addEventListener("click", function(e) {
        e.preventDefault();
        let altura = document.querySelector("#altura");
        let valorAlt = altura.value;
        console.log(valorAlt);
    })

    let calculo = document.querySelector("#calcular");
    calculo = addEventListener("click", function(e) {
        e.preventDefault();
        let span = document.querySelector("#resultado");
        let resultadoImc = span.value;
        console.log(resultadoImc);
    })
    
    /*
    let calcurarImc = document.querySelector("#calcular");
    calcularImc = addEventListener("click", function(e) {
    e.preventDefault();
    let calculoImc = document.querySelector("#calcular");
    let calculo = calculoImc.value;
    console.log(calculo);
    })
    */


    /*
    let altura = document.querySelector("#altura");
    let resultado = parseInt(peso) / parseInt((altura * altura));
    document.querySelector("resultado").innerHTML
    */

    /*
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
    */