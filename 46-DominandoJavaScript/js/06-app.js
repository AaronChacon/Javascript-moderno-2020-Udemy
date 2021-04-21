// New binding

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Toyobobo', 'rojo');
console.log(auto);


// window binding

window.color = 'negro';
function hola(params) {
    console.log(color); 
}

hola()