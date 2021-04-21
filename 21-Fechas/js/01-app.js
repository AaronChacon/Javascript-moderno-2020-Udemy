

const diaHoy = new Date();

let valor;

valor = diaHoy

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getTime(); // milisegundos desde 01-01-1970

valor = diaHoy.setFullYear(2010);

// Las fechas son objetos
console.log(valor);