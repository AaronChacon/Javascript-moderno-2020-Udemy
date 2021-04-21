
// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'aaron',
    saldo: 1200
};

const nombre = 'Aaron';

weakset.add(cliente);

//weakset.add(nombre);

// Invalid value used in weak set at WeakSet.add
// El weakset solo acepta valores como objetos.

//has

//delete

//.size no existe en weakset

// no son iterables

console.log(weakset.has(cliente));

console.log(weakset);