let peso = prompt ("Qual é o seu peso");
let altura = prompt("Qual é sua altura?");

let resultado = calcularImc (peso , altura);

alert(resultado);

function calcularImc (peso, altura){

    let imc = peso/(altura * altura);

    let returno= '';

    if (imc > 25){
 
        retorno = "acima do peso";
    }else if(imc >18 && imc <= 25){
        retorno = "peso ideal" ;
    }else{
        retorno = "abaixo do peso" ;
    }

    return retorno;

}

