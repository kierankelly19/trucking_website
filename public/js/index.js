$(window).load(function() {
    $('.autobot-button').raptorize();

    $('.autobot-button').raptorize({
        'enterOn' : 'konami-code'
      });

    $('.card-flip').click(function(){
        $(this).find('.flip').toggleClass('flipped')
        return true;
    });

    $('.smooth-scroll').smoothScroll({offset: 0, speed: 'auto', autoCoefficient: 3})

    // document.querySelector(".card-flip").classList.toggle("flip");
});
