$(window).load(function() {
    $('.button').raptorize();

    $('.button').raptorize({
        'enterOn' : 'konami-code'
      });

    $('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped')
        return true;
    });

    $('.smooth-scroll').smoothScroll({offset: 0, speed: 'auto', autoCoefficient: 3})
});