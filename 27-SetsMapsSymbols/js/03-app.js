
//MAPS

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true , true);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));
console.log(cliente.delete('nombre'));
console.log(cliente.nombre);

cliente.clear();
console.log(cliente);


const paciente = new Map([['nombre', 'paciente'], ['cuarto', '401']]);

paciente.set('dr', 'Dr asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach((datos, index) => {
    console.log(`${index} - ${datos}`);
});