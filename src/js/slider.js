var Slider = function(arraySlides) {
    var buildSlider = (function() {
        var sourceSlides,
            templateSlides,
            contextSlides,
            htmlSlides;
        return {
            sd_templateInit: function() {
                sourceSlides   = $("#slider-template").html();
                templateSlides = Handlebars.compile(sourceSlides);
            },
            sd_templateInsertData: function(arraySlides) {
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
        var autoSlider = setInterval(function() {
            sliderControl._moveSlide(1);
        }, 1000);
        $('.control-next').on('click', (function(){
            sliderControl._moveSlide(1);
        }));
        $('.control-prev').on('click', (function(){
            sliderControl._moveSlide();
        }));
    };
    var sliderControl = (function() {
        var pos = 0,
            totalSlides,
            sliderWidth;
        return {
            _enterWidth: function () {
                totalSlides = $('.content-holder li').length;
                sliderWidth = $('.slider li img').width();
                $('.content-holder').css({width: sliderWidth * totalSlides});
                console.log( $('.content-holder').width());
                console.log($('.content-holder li').length);
            }, 
            _moveSlide: function(direction) {
                if (direction == 1) {
                    pos++;
                    if (pos == totalSlides) {
                        pos = 0;
                    }
                    $('.content-holder').css({left: -(sliderWidth * pos)});
                    
                }
                else {
                    pos--;
                    if (pos == -1) {
                        pos = totalSlides - 1;
                    }
                    $('.content-holder').css({left: -(sliderWidth * pos)});
                }
            }
        };
    }()); //модуль

/*
        //for each slide
        $.each($('#slider-wrap ul li'), function() {
            //set its color
            var c = $(this).attr("data-color");
            $(this).css("background",c);

            //create a pagination
            var li = document.createElement('li');
            $('#pagination-wrap ul').append(li);
        });

        //counter
        countSlides();

        //pagination
        pagination();

        //hide/show controls/btns when hover
        //pause automatic slide when hover
        $('#slider-wrap').hover(
            function(){ $(this).addClass('active'); clearInterval(autoSlider); },
            function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
        );
    /************************
     //*> OPTIONAL SETTINGS
     ************************/
/*    function countSlides(){
        $('#counter').html(pos+1 + ' / ' + totalSlides);
    }

    function pagination(){
        $('#pagination-wrap ul li').removeClass('active');
        $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
    }*/
};