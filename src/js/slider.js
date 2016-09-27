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
    $holder,
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
    $holder = $('.js-content-holder');
    $bullets = $('.js-nav span');
    $('.js-nav span:first-child').addClass('on');
    $holder.addClass('animated');
    totalSlides =  $slide.length;
    slideWidth = $('.js-content-holder img').width();
    $holder.css({width: slideWidth * totalSlides});
  };
  function _start() {
    autoSlider = setInterval(function () {
      _move(1);
    }, duration);
  };
  function _move(direction) {
    $('.on').removeClass('on');
    if (direction === 1) {
      pos++;
      if (pos === totalSlides) {
        pos = 0;
      }
      $holder.css({left: -(slideWidth*(pos))});
      index = parseInt($slide.eq(pos).data('number'));
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