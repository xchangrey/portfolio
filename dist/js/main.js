const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial state of the menu

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set the menu state
    showMenu = false;
  }
}

window.onload = function() {
  Particles.init({
    selector: ".background",
    maxParticles: 150,
    color: "#64ffda",
    connectParticles: true,
    sizeVariations: 6,
    minDistance: 120,
    responsive: [
      {
        breakpoint: 992,
        maxParticles: 100
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 90,
          connectParticles: false
        }
      },
      {
        breakpoint: 500,
        options: {
          maxParticles: 100
        }
      }
    ]
  });
};