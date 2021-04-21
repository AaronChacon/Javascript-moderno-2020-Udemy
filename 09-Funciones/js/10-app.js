
const aprendiendo1 = function(){
    console.log('Aprendiendo Javascript');   
}

// Arrow Function

// 1- Eliminamos la expresion function y lo cambiamos por el arrow
const aprendiendo2 = () => {
    console.log('Aprendiendo Javascript');   
}

// 2- Podemos eliminar las llaves  si es solo 1 linea - opcional
const aprendiendo3 = () => console.log('Aprendiendo Javascript')

// 3- Igualmente si es 1 linea da por implicito el return
const aprendiendo4 = () => 'Aprendiendo Javascript'

aprendiendo1()
aprendiendo2()
aprendiendo3()
aprendiendo4()