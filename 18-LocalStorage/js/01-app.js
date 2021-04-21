localStorage.setItem('Nombre', 'Aaron');


sessionStorage.setItem('Nombre', 'Mariam');

const producto = {
    nombre: 'Iphone 12',
    precio: 829
}

const productoString = JSON.stringify( producto );
console.log(productoString);

localStorage.setItem('Producto', productoString);

const meses = ['enero', 'febrero', 'marzo']
const mesesString = JSON.stringify( meses );

localStorage.setItem('Meses', mesesString);
