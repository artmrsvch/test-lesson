

                /* ПОЛНОЭКРАННОЕ МЕНЮ */


const gambMenu = document.querySelector('.gamb-menu');
const icoGamb = document.querySelector('.header__gamburger');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

icoGamb.addEventListener('click', function(e){
    gambMenu.classList.toggle('gamb__activ');
    header.classList.toggle('header__activ');

    if (gambMenu.classList.contains('gamb__activ')){
        document.body.style.overflow='hidden';
        logo.style.opacity='0';
    } else {
        document.body.style.overflow='visible';
        logo.style.opacity='1';
    }
})



             /* СЛАЙДЕР ГОРИЗОНТАЛЬНЫЙ */

const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.bar-menu__item');
const menuLength = menuItem.length;

menu.addEventListener('click', function(e) {
    for(let i = 0; i<menuLength; i++) {
        menuItem[i].classList.remove('bar-menu__hover_active')
    }
})
for(let i = 0; i<menuLength; i++){
    menuItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        if (menuItem[i].classList.contains('bar-menu__hover_active')){
            menuItem[i].classList.remove('bar-menu__hover_active')} else {
                for(let i = 0; i<menuLength; i++){
                    menuItem[i].classList.remove('bar-menu__hover_active')
                }
                menuItem[i].classList.add('bar-menu__hover_active');
            }
    })
}

             /* СЛАЙДЕР TEAM */

const team = document.querySelector('.team');
const teamItem = document.querySelectorAll('.team-list__item');
const teamLength = teamItem.length;

team.addEventListener('click', function(e) {
    for(let i = 0; i<teamLength; i++) {
        teamItem[i].classList.remove('team-list__item_activ')
    }
})
for(let i = 0; i<teamLength; i++){
    teamItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        if (teamItem[i].classList.contains('team-list__item_activ')){
            teamItem[i].classList.remove('team-list__item_activ')} else {
                for(let i = 0; i<teamLength; i++){
                    teamItem[i].classList.remove('team-list__item_activ')
                }
                teamItem[i].classList.add('team-list__item_activ');
            }
    })
}