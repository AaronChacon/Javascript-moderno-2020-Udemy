
// Factory - crea objetos basado en ciertas condiciones.


class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
    }

}

class HTMLFactory {
    crearElemento(tipo, name){
        switch (tipo) {
            case tipo:
                return new InputHTML(tipo, name);
            default:
                break;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());


const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());