const navToggle = $("#mobile-menu");
const menuLinks = $(".sidebar");
const blur = $(".nav-blur");

navToggle.click(() => {
    navToggle.toggleClass("active");
    menuLinks.toggleClass("is-active");
    blur.toggleClass("blur");
})


function deactivate(viewport) {
    if (viewport.matches) { // If media query matches
        navToggle.removeClass("active");
        menuLinks.removeClass("is-active");
        blur.removeClass("blur");
    }
}

var viewport = window.matchMedia("(max-width: 1000px)")
deactivate(viewport) // Call listener function at run time
viewport.addListener(deactivate) // Attach listener function on state changes