
// forEach

pendientes = ['tarea', 'comer', 'proyecto', 'Estudiar'];

const nuevoArreglo1 = pendientes.forEach((pendiente, indice)=>{
    
    return `${indice}: ${pendiente}`

})

const nuevoArreglo2 = pendientes.map((pendiente, indice)=>{

    return `${indice}: ${pendiente}`

})

console.log(nuevoArreglo1);
console.log(nuevoArreglo2);