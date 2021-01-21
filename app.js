const burger = document.getElementById('burger');

const ul = document.querySelector('ul')


burger.addEventListener('click', () =>{
    ul.classList.toggle('show')
})





$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".navbar").addClass("active");
      

        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("active");

        }
    });
});