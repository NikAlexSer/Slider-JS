var Slider = function(arraySlides) {
  var index,
    totalSlides,
    autoSlider,
    slideWidth,
    position = 0 ,
    duration = 1000,
    $next,
    $prev,
    $slide,
    $bullets,
    $holder,
    $slider,
    sourceSlides,
    templateSlides,
    contextSlides,
    htmlSlides;
  
  function _templateInit() {
    sourceSlides = $("#slider-template").html();
    templateSlides = Handlebars.compile(sourceSlides);
  }
  function _templateInsertData(arraySlides) {
    contextSlides = {slidesTemp: arraySlides};
    htmlSlides = templateSlides(contextSlides);
  }
  function _templateBuild() {
    $('body').append(htmlSlides);
  }
  
  function _prepareAnimation() {
    $next = $('.control-next');
    $prev =  $('.control-prev');
    $slide = $('.js-content-holder li');
    $slider = $('.slider');
    $holder = $('.js-content-holder');
    $bullets = $('.js-nav span');
    $('.js-nav span:first-child').addClass('on');
    totalSlides =  $slide.length;
    slideWidth = $('.js-content-holder img').width();
    $holder.css({width: slideWidth * totalSlides});
    $holder.addClass('animated');
  };

  function _addEvents() {
    $next.on('click', (function() {
      _move(-1);
    }));
    $prev.on('click', (function() {
      _move(1);
    }));
    $slider.on('mouseenter', function() {
      clearInterval(autoSlider);
    });
    $slider.on('mouseleave', function() {
      _start();
    });
  };
  function _start() {
    autoSlider = setInterval(function () {
      _move(-1);
    }, duration);
  };
  function _move(direction) {
    $('.on').removeClass('on');
    position = position + direction * slideWidth;  // -1 right, 1 left
    $holder.css({'transform':'translateX('+(position)+'px)'});
    index = parseInt($slide.eq(Math.abs(Math.round(position/slideWidth))).data('number'));
    $bullets.eq(index).addClass('on');
  };
  this.init = function() {
    _templateInit();
  };
  this.render = function() {
    _templateInsertData(arraySlides);
    _templateBuild();
    _prepareAnimation();
    _addEvents();
    _start();
  };
};