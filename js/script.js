$(function slider(){
    $('.portfolio__inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000
    });

    $('.tools__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

document.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector('.burger'),
          menuList = document.querySelector('.menu__list'),
          burgerLine1 = document.querySelector('.burger span:nth-child(1)'),
          burgerLine2 = document.querySelector('.burger span:nth-child(2)');

    burger.addEventListener('click', ()=>{
        menuList.classList.toggle('menu__list-active');
        rotate();
    });

    function rotate(){
        burgerLine1.classList.toggle('burger-line-first');
        burgerLine2.classList.toggle('burger-line-last');
    }


    const menu = document.querySelector('.menu'),
          menuBtns = document.querySelectorAll('.menu__link');
    
    function displayNone(){
        menuBtns.forEach(item=>{
            item.classList.remove('active');
        });
        menuList.classList.remove('menu__list-active');
        burgerLine1.classList.remove('burger-line-first');
        burgerLine2.classList.remove('burger-line-last');
    }

    function displayBlock(i=0){
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

    const year = document.querySelector('.year');
    year.innerHTML = new Date().getFullYear();
});