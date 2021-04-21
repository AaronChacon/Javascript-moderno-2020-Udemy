// eliminar del localstorage
localStorage.removeItem('Nombre');

// actualizar un registro
const mesesArray = JSON.parse( localStorage.getItem('Meses') )
console.log(mesesArray);

mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify( mesesArray )  )


localStorage.clear()
