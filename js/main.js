AOS.init({
	duration: 1200
});

// SVG file to SVG code convert JS Start
function img2svg() {
    jQuery('.in__svg').each(function(i, e) {

        var $img = jQuery(e);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
}
img2svg();

// SVG file to SVG code convert JS End

// Clients Slider JS Start
$('.clients__slider').slick({
	speed: 8000,
	autoplay: true,
	autoplaySpeed: 0,
	centerMode: true,
	cssEase: 'linear',
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	infinite: true,
	initialSlide: 1,
	arrows: false,
	buttons: false
});
// Clients Slider JS End

// Mobile Menu JS Start
$(".mobile__menu").click(function(){
    $(".mobile__menu, .header__menu").toggleClass("open");
});
// Mobile Menu JS End

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("fixed__header");
    } else {
        $("header").removeClass("fixed__header");
    }
});