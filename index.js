const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');

function toggleMenu(){
    menu.classList.toggle('open')
}
menuButton.addEventListener('click',() =>{
    toggleMenu();  
})