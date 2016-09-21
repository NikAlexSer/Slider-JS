var Slider = function(arraySlides) {
    var pos = -1,
        index,
        totalSlides,
        autoSlider,
        slideWidth,
        duration = 1000,
        $next,
        $prev,
        $slide,
        $bullets,
        $holder;
    var buildSlider = (function() {
        var sourceSlides,
            templateSlides,
            contextSlides,
            htmlSlides;
        return {
            sd_templateInit: function() {
                sourceSlides = $("#slider-template").html();
                templateSlides = Handlebars.compile(sourceSlides);
            },
            sd_templateInsertData: function (arraySlides) {
                contextSlides = {slidesTemp: arraySlides};
                htmlSlides = templateSlides(contextSlides);
            },
            sd_templateBuild: function() {
                $('body').append(htmlSlides);
            }
        };
    }()); //модуль
    function _start() {
        autoSlider = setInterval(function () {
            _move(1);
        }, duration);
    };
    function _enterWidth() {
        totalSlides =  $slide.length;
        slideWidth = $('.js-content-holder img').width();
        $holder.css({width: slideWidth * totalSlides});
    };
    function _move(direction) {
        $('.on').removeClass('on');
        if (direction === 1) {
            pos++;
            if (pos === totalSlides) {
                pos = 0;
            }
            $holder.css({left: -(slideWidth*(pos))});
            index = +$slide.eq(pos).data('number');
            $bullets.eq(index).addClass('on');
        }
        else {
            pos--;
            if (pos === -1){
                pos = totalSlides - 1;
            }
            $holder.css({left: -(slideWidth*(pos))});
            index = +$slide.eq(pos).data('number');
            $bullets.eq(index).addClass('on');
        }
    };
    function _addEvents() {
        $next.on('click', (function() {
            _move(1);
        }));
        $prev.on('click', (function() {
            _move();
        }));
        $slide
            .add($prev)
            .add($next)
            .add($bullets).on('mouseenter', function() {
            clearInterval(autoSlider);
        });
        $slide
            .add($prev)
            .add($next).on('mouseleave', function() {
            _start();
        });
        $bullets.on('click', function() {
            pos = $(this).index() - 1;
            clearInterval(autoSlider);
            _move(1);
        });
    };
    this.init = function() {
        buildSlider.sd_templateInit();
    };
    this.render = function() {
        buildSlider.sd_templateInsertData(arraySlides);
        buildSlider.sd_templateBuild();
        $next = $('.control-next');
        $prev =  $('.control-prev');
        $slide = $('.js-content-holder li');
        $holder = $('.js-content-holder');
        $bullets = $('.js-nav span');
        $('.js-nav span:first-child').addClass('on');
        $holder.addClass('animated');
        _enterWidth();
        _addEvents();
        _start();
    };
};