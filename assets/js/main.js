
const cartIcon = document.querySelector('.header-action__cart-header');
const cartList = document.querySelector('.header-action__cart-list')
cartIcon.onclick = function () {
    cartList.classList.toggle('active');

    // window.onclick = function(e) {
    //     if(!e.target.matches('.header-action__cart-header')) {
    //         cartList.classList.remove('active');
    //     }
    // }
}

let closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = function() {
    let cartList = document.querySelector('.header-action__cart-list');
    cartList.classList.remove('active');
}


let toggleMenuStatus = false;

let toggleMenu = function() {
    let getCategory = document.querySelector('.vertical-menu-category__list');

    if(toggleMenuStatus === false) {
        getCategory.style.visibility = 'hidden';
        getCategory.style.opacity = '0,8';
        getCategory.style.height = '0';

        toggleMenuStatus = true;
    }

    else if(toggleMenuStatus === true) {
        getCategory.style.visibility = 'visible';
        getCategory.style.opacity = '1';
        getCategory.style.height = '453px';

        toggleMenuStatus = false;
    }

}

handleMenu();

function handleMenu () {

    var closeMenu = document.querySelector('#close-menu');
    var closeCategory = document.querySelector('#close-category');
    var menuIcon = document.querySelector('.menu-icon');
    var menuMobile = document.querySelector('.primary-menu');
    var overlay = document.querySelector('.overlay');
    var mediaSize = 1023;
    var categoryIcon = document.querySelector('.vertical-menu-category__title');
    var catetagoryList = document.querySelector('.vertical-menu-category__list');
    
    // // overlay.addEventListener('click', toggleNav)
    // menuIcon.addEventListener('click', toggleNav);
    // categoryIcon.addEventListener('click', toggleNav);
    // closeMenu.addEventListener('click', toggleNav);
    // closeCategory.addEventListener('click', toggleNav)

    // function toggleNav () {
    //     menuMobile.classList.toggle('show-menu');
    //     catetagoryList.classList.toggle('show-menu');
    //     // overlay.classList.toggle('active')
    // }


    closeMenu.onclick = () => {
        menuMobile.classList.remove('show-menu');
        overlay.classList.toggle('active');
    }
    
    closeCategory.onclick = () => {
        catetagoryList.classList.remove('show-menu');
        // overlay.classList.toggle('active');
    }
    
    menuIcon.onclick = () => {
        menuMobile.classList.toggle('show-menu');
        overlay.classList.toggle('active');
    }

    categoryIcon.onclick = () => {
        catetagoryList.classList.toggle('show-menu');
        // overlay.classList.toggle('active');
    }
    
    window.onclick = function(e) {
        if(e.target.matches('.overlay')) {
            // if (catetagoryList.classList.contains("show-menu")) {
            //     catetagoryList.classList.remove('show-menu');
            //     overlay.classList.remove('active');
            // }
            if (menuMobile.classList.contains("show-menu")) {
                menuMobile.classList.remove('show-menu');
                overlay.classList.remove('active');
            }
        }
    }
    
    function resizeFix(){
        if(menuMobile.classList.contains("show-menu")){
            menuMobile.classList.remove('show-menu');
            // overlay.classList.remove('active');
        }
        if(catetagoryList.classList.contains("show-menu")){
            catetagoryList.classList.remove('show-menu');
            // overlay.classList.remove('active');
        }
    }
    
    window.addEventListener("resize", function(){
      if(this.innerWidth > mediaSize){
          resizeFix();
      }
    });
}




