var $nav = $('.top-nav'),
    $hamBtn = $('.ham-btn'),
    $lHero = $('.hero');

$hamBtn.stop().on('click touchstart', function (evt) {
    evt.preventDefault();
    $hamBtn.toggleClass('ham-open');
    $lHero.fadeToggle(0);

    if ($nav.css('display') === 'flex') {
        $nav.css('display', 'none');
        console.log($nav.css('display'));
    } else {
        $nav.css('display', 'flex');
        console.log($nav.css('display'));
    }
}); // ham-btn on click/touch event

// add class fixed

$(window).scroll(function(){
    var $scrollBodyTop = ($('body').scrollTop());
    if ($scrollBodyTop) {
        $nav.addClass('fixed-nav');
    }
    else {
        $nav.removeClass('fixed-nav');
    }
});//end window.scroll;


