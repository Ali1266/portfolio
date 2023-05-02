$(function slider(){
    $('.slick-slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000
    });
});

document.addEventListener('DOMContentLoaded', ()=>{
    const menu = document.querySelector('.menu'),
          menuBtns = document.querySelectorAll('.menu__btn'),
          blocks = document.querySelectorAll('.block');

    
    function displayNone(){
        blocks.forEach(item=>{
            item.style.display = 'none';
        });
        menuBtns.forEach(item=>{
            item.classList.remove('active');
        });
    }

    function displayBlock(i=1){
        blocks[i].style.display = 'block';
        menuBtns[i].classList.add('active');
    }

    displayNone();
    displayBlock();

    menu.addEventListener('click', (event)=>{
        const target = event.target;
        menuBtns.forEach((item, i)=>{
            if(target == item){
                displayNone();
                displayBlock(i);
            }
        });
    });
});