const humButton=document.querySelector('.hunburger_menu_container');
const headerContent =document.querySelector('.headerContainer')
const closeIcon=document.querySelector('.close-icon');
humButton.addEventListener('click',()=>{
  headerContent.classList.add('menu_open')
})

closeIcon.addEventListener('click',()=>{
  headerContent.classList.remove('menu_open')
})