var result = document.querySelector(".result");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
function calcular() {
    var porcent = document.querySelector(".porcent").value;
    var num = document.querySelector(".num").value;
    var div = (porcent / 100);
    var resultado =  div * num;
    result.innerHTML = "Resultado: " + resultado;
    p1.innerHTML = porcent + " divididos por 100 = " + div ;
    p2.innerHTML = div + " vezes " + num + " = " + resultado;
}