const paisesData = {
2000: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 80%)"},
{ nombre: "BR", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "Argentina", style: "fill:hsl(128, 100%, 80%)" },
{ nombre: "ES", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "IE", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "UnitedKingdom", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "CH", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "DE", style: "fill:hsl(128, 100%, 80%)" },
{ nombre: "CZ", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "Japan", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "IN", style: "fill:hsl(128, 100%, 37%)"},
],
2005: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "BR", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "Argentina", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "ES", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "IE", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "UnitedKingdom", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "CH", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "DE", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "CZ", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "Japan", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "IN", style: "fill:hsl(128, 100%, 23%)"},
],
2010: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "BR", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "Argentina", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "ES", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "IE", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "UnitedKingdom", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "CH", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "DE", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "CZ", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "Japan", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "IN", style: "fill:hsl(128, 100%, 11%)"},
],
2015: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "BR", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "Argentina", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "ES", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "IE", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "UnitedKingdom", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "CH", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "DE", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "CZ", style: "fill:hsl(128, 100%, 23%)"},
{ nombre: "Japan", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "IN", style: "fill:hsl(128, 100%, 11%)"},
],
2020: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 23%)"},
{ nombre: "BR", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "Argentina", style: "fill:hsl(128, 100%, 11%)" },
{ nombre: "ES", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "IE", style: "fill:hsl(128, 100%, 11%)" },
{ nombre: "UnitedKingdom", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "CH", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "DE", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "CZ", style: "fill:hsl(128, 100%, 23%)"},
{ nombre: "Japan", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "IN", style: "fill:hsl(128, 100%, 11%)"},
],
};

function changeMap(fecha) {

// En el parámetro fecha recibiremos el año que se haya seleccionado en el slider

// Con esa fecha nos traemos los datos que necesitamos

const dataFecha = paisesData[parseInt(fecha)];




// Ahora la variable dataFecha tendrá el listado de países con su color para el año que necesitamos

// Vamos loopeando por cada país y le cambiamos el color a los <path> que correspondan

for (let j = 0; j < dataFecha.length; j++) {

// seleccionamos todos los vectores (<path>) que correspondan al país

// Para que esto funcione es necesario que la key "nombre" en el array de datos se corresponda con la clase que tienen los vectores en el mapa

const vectoresPais = document.getElementsByClassName(dataFecha[j].nombre);


for (let i = 0; i < vectoresPais.length; i++) {

vectoresPais[i].setAttribute("style", dataFecha[j].style);

}

}

}
