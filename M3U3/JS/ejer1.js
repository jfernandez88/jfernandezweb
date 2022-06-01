/*
Ejericio 1
    Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
    0 a 1000 metros = pie
    1000 a 10000 metros = bicicleta
    10000 a 30000 metros = colectivo
    30000 a 100000 metros = auto
    +100000 = avion
*/

metros=prompt('Metros', '');

document.write("<h1>Medio de transporte apropiado:</h1>");

if(metros >=0 && metros <= 1000 ){
    document.write("<h1>Pie</h1>");
}

if(metros >=1000 && metros <= 10000 ){
    document.write("<h1> Bicicleta</h1>");
}

if(metros >=10000 && metros <= 30000 ){
    document.write("<h1> Colectivo</h1>");
}


if(metros >=30000 && metros <= 100000 ){
    document.write("<h1> Auto</h1>");
}

if(metros >100000  ){
    document.write("<h1> Avion</h1>");
}



