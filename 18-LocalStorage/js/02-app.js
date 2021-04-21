const nombre = localStorage.getItem('Nombre')
console.log(nombre);

const productoJSON = localStorage.getItem('Producto')
console.log( JSON.parse(productoJSON) );

const mesesJSON = localStorage.getItem('Meses')
console.log( JSON.parse(mesesJSON) );