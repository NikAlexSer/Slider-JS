var Slider = function(arraySlides) {
    var pos = -1,
        index,
        totalSlides,
        autoSlider,
        sliderWidth,
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
    function _startSlider() {
        clearInterval(autoSlider);
        autoSlider = setInterval(function () {
            sliderControl._moveSlide(1);
        }, 3000);
    };
    function _enterWidth() {
        totalSlides =  $slide.length;
        sliderWidth = $('.js-content-holder img').width();
        $holder.css({width: sliderWidth * totalSlides});
    };
    function _moveSlide(direction) {
        $('.on').removeClass('on');
        if (direction === 1) {
            pos++;
            if (pos === totalSlides) {
                pos = 0;
            }
            $holder.css({left: -(sliderWidth*(pos))});
            index = +$slide.eq(pos).data('number');
            $('.js-nav span').eq(index).addClass('on');
        }
        else {
            pos--;
            if (pos === -1){
                pos = totalSlides - 1;
            }
            $holder.css({left: -(sliderWidth*(pos))});
            index = +$slide.eq(pos).data('number');
            $bullets.eq(index).addClass('on');
        }
    };
    function _eventsCheck() {
        $next.on('click', (function() {
            _moveSlide(1);
        }));
        $prev.on('click', (function() {
            _moveSlide();
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
            _startSlider();
        });
        $bullets.on('click', function() {
            pos = $(this).index() - 1;
            clearInterval(autoSlider);
            _moveSlide(1);
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
        _eventsCheck();
        _startSlider();
    };
};