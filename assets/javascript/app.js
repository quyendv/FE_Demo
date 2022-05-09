$(document).ready(() => {
    //setting owl carousel
    // slide movie
    let navText = ["<i class = 'bx bx-chevron-left'></i>", 
    "<i class = 'bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText, 
        autoplayHoverPause: true
    })

    $('#detail-movies-slide').owlCarousel({
        items: 3,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplayHoverPause: true
    })

    
})