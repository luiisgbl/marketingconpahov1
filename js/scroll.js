// let carrusel = document.querySelector('.content_tips');
// let sliderIndividual = document.querySelectorAll(".tips");
// let contador = 1
// let widt = sliderIndividual[0].clientWidth;
// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
// let intervalo = 10000;
// let step = 20;


// const start = () => {
//     intervalo = setInterval(function(){
//         carrusel.scrollLeft = carrusel.scrollLeft += 10;
//         if(carrusel.scrollLeft === maxScrollLeft){
//             step += -1;
//         } else if (carrusel.scrollLeft === 0){
//             step += step * -10;
//         }
//     },20);
// };

// const stop = () => {
//     clearInterval(intervalo);
// };

// carrusel.addEventListener('mouseover', () => {
//     stop();
// })
// carrusel.addEventListener('mouseout', () => {
//     start();
// })

// start();