const navToggle = $("#mobile-menu");
const menuLinks = $(".sidebar");

navToggle.click( () => {
    navToggle.toggleClass("active");
    menuLinks.toggleClass("is-active");
})