AOS.init({
    offset: 200,
    duration: 1000,
    once: true,
    mirror: true,
});


//// SIDEBAR-LINK ON LOAD ANIMATION MANAGER
$('.nav li').each((index, value) => {
    $(value).attr("data-aos-delay", 200 + index * 150);
    $(value).attr("data-aos-offset", 0);
});

//// SCROLL BAR SLOW FADE
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $('.scroll-down').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = (((elementHeight - scrollTop) / elementHeight) * 0.15) + 0.5;

            return opacity;
        }
    });
});

//// SIDEBAR SECTION INDICATOR
$(document).scroll(function () {
    $('section').each(function (index) {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top * 1.1 + $(this).outerHeight()) * 0.9 > $(document).scrollTop()) {
            navLinkActive(index);
        }
    });
});


let lastIndex = null;

function navLinkActive(index) {
    if (index === lastIndex) {
        $(".nav li").eq(index).addClass("nav__link--active");
    } else {
        $(".nav li").eq(lastIndex).removeClass("nav__link--active");
    }
    
    lastIndex = index;
}