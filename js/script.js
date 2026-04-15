
function mostrarEsconderMenu(){
    const menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener("click", () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');

        if(menu.classList.contains('active')){
            document.querySelector(".menu-icon img").src = "imgs/close.png";
        }else{
            document.querySelector(".menu-icon img").src = "imgs/menu.png";
        }
    });
}

mostrarEsconderMenu();