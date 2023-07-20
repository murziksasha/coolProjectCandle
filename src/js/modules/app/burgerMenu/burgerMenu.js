export function burgerMenu() {
    const menuBtn = document.querySelector('.menu__btn'); //сами палочки
    const menuMobile = document.querySelector('.header__menu.menu__list'); // пункты меню
    menuBtn.addEventListener('click', () => {
        menuMobile.classList.toggle('menu--open');
    });
}
//# sourceMappingURL=burgerMenu.js.map