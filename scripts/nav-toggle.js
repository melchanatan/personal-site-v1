const navToggle = $("#mobile-menu");
const menuLinks = $(".sidebar");
const blur = $(".nav-blur");
const navLinks = $(".nav__link");
const navLogo = $(".nav__logo-link");

function toggleAll() {
    navToggle.toggleClass("active");
    menuLinks.toggleClass("is-active");
    blur.toggleClass("blur");
}


/////////////////// Toggle when event is trigger ///////////////////

navToggle.click( () => {
    toggleAll();
})

blur.click( () => {
    toggleAll();
})

navLogo.click( () => {
    toggleAll();
})

$(document).on('click', '.nav__link', function () {
    blur.removeClass("blur");
    menuLinks.removeClass("is-active");

});


/////////////////// Hide All when on tablet ///////////////////

var viewport = window.matchMedia("(max-width: 1000px)")
removeAll(viewport) 
viewport.addListener(removeAll) 

function removeAll(viewport) {
    if (viewport.matches) { 
        navToggle.removeClass("active");
        menuLinks.removeClass("is-active");
        blur.removeClass("blur");
    }
}
