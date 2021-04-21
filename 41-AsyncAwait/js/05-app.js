
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

/* function obtenerDatos() {
    fetch(url)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
}
 */

/* async function obtenerDatos() {
    const resp = await fetch(url);
    const rest = await resp.json();
    console.log(rest);
} */

async function obtenerDatos() {
    try {
        const resp = await fetch(url);
        const rest = await resp.json();
        console.log(rest);
    } catch (error) {
        console.log(error);
    }
}
