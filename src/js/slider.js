var Slider = function(arraySlides) {
    var pos = -1,
        index,
        totalSlides,
        autoSlider,
        sliderWidth;
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
    this.init = function() {
        buildSlider.sd_templateInit();
    };
    this.render = function() {
        buildSlider.sd_templateInsertData(arraySlides);
        buildSlider.sd_templateBuild();
        sliderControl._enterWidth();

        $('.js-nav span:first-child').addClass('on');
        $('.js-content-holder').addClass('animated');
        sliderControl._eventsCheck();
        sliderControl._start();
    };
    var sliderControl = (function() {
        return {
            _start: function() {
                clearInterval(autoSlider);
                autoSlider = setInterval(function () {
                    sliderControl._moveSlide(1);
                }, 3000);
            },
            _enterWidth: function() {
                totalSlides = $('.js-content-holder li').length;
                sliderWidth = $('.js-content-holder img').width();
                $('.js-content-holder').css({width: sliderWidth * totalSlides});
            },
            _moveSlide: function(direction) {
                $('.on').removeClass('on');
                if (direction === 1) {
                    pos++;
                    if (pos === totalSlides) {
                        pos = 0;
                    }
                    $('.js-content-holder').css({left: -(sliderWidth*(pos))});
                    index = +$('.js-content-holder li').eq(pos).data('number');
                    $('.js-nav span').eq(index).addClass('on');
                }
                else {
                    pos--;
                    if (pos === -1){
                        pos = totalSlides - 1;
                    }
                    $('.js-content-holder').css({left: -(sliderWidth*(pos))});
                    index = +$('.js-content-holder li').eq(pos).data('number');
                    $('.js-nav span').eq(index).addClass('on');
                }
            },
            _eventsCheck: function() {
                $('.control-next').on('click', (function() {
                    sliderControl._moveSlide(1);
                }));
                $('.control-prev').on('click', (function() {
                    sliderControl._moveSlide();
                }));
                $('.js-content-holder li')
                    .add($('.control-prev'))
                    .add($('.control-next'))
                    .add($('.js-nav span')).on('mouseenter', function() {
                    clearInterval(autoSlider);
                });
                $('.js-content-holder li')
                    .add($('.control-prev'))
                    .add($('.control-next')).on('mouseleave', function() {
                        sliderControl._start();
                });
                $('.js-nav span').on('click', function() {
                    pos = $(this).index() - 1;
                    clearInterval(autoSlider);
                    sliderControl._moveSlide(1);
                });
            }
        };
    }()); //модуль
};