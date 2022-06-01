/*
Ejericio 2
Crear el código que reciba como parámetro un array de números y devuelva el mayor.
*/
num1 = prompt('Ingrese primer número:','',);
num2 = prompt('Ingrese segundo número:','',);
num3 = prompt('Ingrese tercer número:','',);

var numeros = [num1, num2, num3];

document.write('<h1>Ingresaste: </h1>');
document.write('<br>');
document.write('<h1>'+numeros+'</h1>');
document.write('<br>');



for (var i = 0; i < numeros.length -1; i++){

    for ( var j = 0; j < numeros.length -1; j++ ){

        if (numeros[j] > numeros[j+1]) {
            var aux = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] =aux;       
        }

    }

}

document.write('<br>');
document.write('<h1>El Mayor es: </h1>'+'<h1>'+numeros[2]+'</h1>');