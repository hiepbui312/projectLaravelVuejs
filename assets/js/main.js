
var closeBtn = document.querySelector('.close-btn');
var closeMenu = document.querySelector('#close-menu');
var closeCategory = document.querySelector('#close-category');
var menuIcon = document.querySelector('.menu-icon');
var menuMobile = document.querySelector('.primary-menu');
var overlay = document.querySelector('.overlay');
var categoryIcon = document.querySelector('.vertical-menu-category__title');
var catetagoryList = document.querySelector('.vertical-menu-category__list');
var mediaSize = 1023;

const app = {

    //Open and close cart 
    handleCartList: function () {

        const cartIcon = document.querySelector('.header-action__cart-header');
        const cartList = document.querySelector('.header-action__cart-list')

        cartIcon.onclick = function () {
            cartList.classList.toggle('visible');
        }

        closeBtn.onclick = function() {
            let cartList = document.querySelector('.header-action__cart-list');
            cartList.classList.remove('visible');
        }
    },

    //Toggle menu 

    toggleMenu: function () {
        let toggleMenuStatus = false;
        let getCategory = document.querySelector('.vertical-menu-category__list');
        let menuItem = document.querySelectorAll('.vertical-menu-category__link');
        let toggleBtn = document.querySelector('.vertical-menu__wrapper');

        toggleBtn.onclick = function () {
            
            if(toggleMenuStatus === false) {
                getCategory.style.visibility = 'hidden';
                getCategory.style.opacity = '0,8';
                getCategory.style.height = '0';
                
                menuItemLength = menuItem.length;
        
                for(let i = 0; i < menuItemLength; i++) {
                    // menuItem[i].style.visibility = 'hidden';
                    menuItem[i].style.opacity = '0';
                }
        
                toggleMenuStatus = true;
                }
            
            else if(toggleMenuStatus === true) {
                getCategory.style.visibility = 'visible';
                getCategory.style.opacity = '1';
                getCategory.style.height = '472px';
        
                for(let i = 0; i < menuItemLength; i++) {
                    // menuItem[i].style.visibility = 'visible';
                    menuItem[i].style.opacity = '1';
                }
        
                toggleMenuStatus = false;
            }
        }

    },

    // Handle menu 
    handleMenu: function () {
        closeMenu.onclick = () => {
            menuMobile.classList.remove('show-menu');
            overlay.classList.toggle('visible');
        }
        
        closeCategory.onclick = () => {
            catetagoryList.classList.remove('show-menu');
            // overlay.classList.toggle('visible');
        }
        
        menuIcon.onclick = () => {
            menuMobile.classList.toggle('show-menu');
            overlay.classList.toggle('visible');
        }
    
        categoryIcon.onclick = () => {
            catetagoryList.classList.toggle('show-menu');
        }

        function resizeFix(){
            if(menuMobile.classList.contains("show-menu")){
                menuMobile.classList.remove('show-menu');
            }
            if(catetagoryList.classList.contains("show-menu")){
                catetagoryList.classList.remove('show-menu');g
            }
        }
        
        window.addEventListener("resize", function(){
          if(this.innerWidth > mediaSize){
              resizeFix();
          }
        });
    },

    // Fixed header on top
    stickyHeader: function () {
        const scrollTopBtn = document.getElementById('scroll-top');
        const header = document.querySelector('.page-header')
        const topBar = document.querySelector('.header-topbar');
        const account = document.querySelector('.header-action__account')
        const searchBar = document.querySelector('.header-search');
        const searchKey = document.querySelector('.header-search__search-key');
        const verticalMenu = document.querySelector('.vertical-menu__wrapper');
        const hotline = document.querySelector('.hotline');
        const menuIcon = document.querySelector('.menu-icon');

        window.onscroll = function () {
            if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                scrollTopBtn.classList.add('show-scroll-btn');
                scrollTopBtn.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
                header.classList.add('header-sticky')
                topBar.classList.add('hidden');
                searchKey.classList.add('hidden');
                verticalMenu.classList.add('hidden');
                account.classList.add('hidden');

                searchBar.classList.add('hidden');

                hotline.classList.add('hidden');

                menuIcon.classList.add('tablet-menu-icon');
            }

            else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
                
                scrollTopBtn.classList.remove('show-scroll-btn');
                header.classList.remove('header-sticky')
                topBar.classList.remove('hidden');
                searchKey.classList.remove('hidden');
                verticalMenu.classList.remove('hidden');
                account.classList.remove('hidden');

                searchBar.classList.remove('hidden');

                hotline.classList.remove('hidden');

                menuIcon.classList.remove('tablet-menu-icon');
            }
        }
    },

    // Drop down menu on tablet and mobile 
    dropdownMenu: function () {
        const dropdownBtn = document.querySelectorAll('.dropdown-btn')

        dropdownBtns = dropdownBtn.length;
        var i;
        for (i = 0; i < dropdownBtns; i++) {
            dropdownBtn[i].addEventListener('click', function () {
                var dropdownContent = this.nextElementSibling;
                if(dropdownContent.style.display == 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
        }
    },

    

    start: function () {

        this.handleCartList();

        this.toggleMenu();

        this.handleMenu();

        this.stickyHeader();

        this.dropdownMenu();
        
    }
}

app.start();






