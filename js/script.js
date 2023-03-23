$(function(){
    "use strict";
    let menu = document.querySelector(".nav_item");
    let bars = document.querySelector(".bars");
    
    bars.addEventListener("click", ()=>{
        menu.classList.toggle("active")
    });


    $('.test_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots:true,
        arrows:false,
        focusOnSelect:true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 1199.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    // YEAR
    let FullYear = new Date().getFullYear();
    document.querySelector(".year").innerHTML=FullYear;
})