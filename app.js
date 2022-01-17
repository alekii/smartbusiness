const hamburger=document.querySelector('.hamburger'); 
const menu = document.querySelector('.mobilemenu'); 
hamburger.addEventListener('click', function(){ 
    hamburger.classList.toggle('adjust');


    
    menu.classList.toggle('open'); 
});