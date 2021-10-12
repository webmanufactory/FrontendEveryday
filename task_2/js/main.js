let mobBtn = document.querySelector('.mob-menu');
let mobMenu = document.querySelector('.nav');
mobBtn.addEventListener('click', function () {
  document.querySelector('.mob-menu__btn').classList.toggle("active");
  mobMenu.classList.toggle("active");
})