// smoothScroll function

function smoothScrollTo(target) {
    document.getElementById(target).scrollIntoView({
        behavior: "smooth"
    });
};