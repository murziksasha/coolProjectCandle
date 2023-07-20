

export function burgerMenu() {

  const menuBtn = document.querySelector('.menu__btn') as HTMLButtonElement; //сами палочки
  const menuMobile = document.querySelector('.header__menu.menu__list') as HTMLUListElement; // пункты меню


  menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
  });


}