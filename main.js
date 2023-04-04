const menu=document.querySelector('#menu-icon')

const navmenu=document.querySelector('.navmenu')

menu.addEventListener("click", (eo) => {
  menu.classList.toggle('bx-x')
  navmenu.classList.toggle('open')
})

