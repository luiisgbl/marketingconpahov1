const mensaje = document.querySelector('#mensaje');
const fondoN = document.querySelector('#fondo_negro');
const cerrar = document.querySelector('#close')

cerrar.addEventListener('click', ocultar);

function ocultar(){
    mensaje.style.display = "none";
    fondoN.style.display = "none";
}
// solo se le abrira al usuario una sola vez
// if(localStorage.getItem('popupShowed') !== 'true'){
//     mensaje.style.display = "flex";
//     fondoN.style.display = "block";
//     localStorage.setItem('popupShowed', 'true');
// };




// Cada vez que se recargue la pagina aparecera la informacio, es provicional hasta que sea dinamico
window.onload = function(){
    mensaje.style.display = "flex";
    fondoN.style.display = "block";
}