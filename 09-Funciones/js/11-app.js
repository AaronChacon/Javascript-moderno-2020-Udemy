
const aprendiendo1 = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);   
}
aprendiendo1('Javascript', 'NodeJs')

/* En los arrow function si se le pasa solo 1 parametros podemos
no utilizar los parentesis */

const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`  

console.log(aprendiendo2('React'));

const aprendiendo3 = (tecnologia, tecnologia2) => {
    return `Aprendiendo ${tecnologia} y ${tecnologia2}`  
} 

console.log(
    aprendiendo3('React', 'Angular')
);
