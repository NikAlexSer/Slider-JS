var Slider = function(arraySlides) {
  var index = 0, // counter
    totalSlides,
    _interval, // for setInterval
    slideWidth,
    isAnimating = false,
    firstItem,
    lastItem,
    duration = 1000,
    $next,
    $prev,
    $slides,
    $bullets,
    $holder,
    $slider,
    sourceSlides,
    templateSlides,
    contextSlides,
    htmlSlides;

  // Handlebars functions
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
    $slides = $('.js-content-holder li');
    $slider = $('.js-slider');
    $holder = $('.js-content-holder');
    $bullets = $('.js-nav span');
    $bullets.eq(index).addClass('on');
    firstItem = $slides.first();
    lastItem = $slides.last();
    isAnimating = false;
    totalSlides = temp = $slides.length;
    slideWidth = $('.js-content-holder img').width();
    $holder.css({width: slideWidth * (totalSlides)});
  };
  function _addEvents() {
    $next.on('click', (function() {
      _slide(1);
    }));
    $prev.on('click', (function() {
      _slide(-1);
    }));
    $slider
      .on('mouseenter', function() {
        clearInterval(_interval);
      })
      .on('mouseleave', function() {
        _settingInterval();
    });
    
  };
  function _settingInterval() {
    _interval = setInterval(function () {
      _slide(1);
    }, duration);
  };
  function _slide(direction) {
    if (isAnimating) {
      return;
    }
    $('.on').removeClass('on');
    isAnimating = true;
    index += direction;
    $bullets.eq(index).addClass('on');
    console.log('Ahtung!', index);
    switch (index) {
      case -1:
        $bullets.eq(totalSlides - 1).addClass('on');
        lastItem.prependTo($holder);
        $holder.transition({x: (index + 2) * -slideWidth + 'px'}, 0);
        $holder.transition({x: (index + 1) * -slideWidth + 'px'}, 300, 'easeInOutExpo', function () {
          index = totalSlides - 1;
          lastItem.appendTo($holder);
          $holder.transition({x: index * -slideWidth + 'px'}, 0);
          isAnimating = false;
        });
        break;
      case totalSlides:
        $bullets.eq(0).addClass('on');
        firstItem.appendTo($holder);
        $holder.transition({x: (index - 2) * -slideWidth + 'px'}, 0);
        $holder.transition({x: (index - 1) * -slideWidth + 'px'}, 300, 'easeInOutExpo', function () {
          index = 0;
          firstItem.prependTo($holder);
          $holder.transition({x: index * -slideWidth + 'px'}, 0);
          isAnimating = false;
        });
        break;
      default:
        //$holder.css({'transform': 'translateX(' + (index * -slideWidth) + 'px)', 'transition': 'all 0.3s cubic-bezier(1,.01,.32,1)' });
        $holder.transition({x: index * -slideWidth + 'px'}, 300, 'easeInOutExpo', function () {
          isAnimating = false;
        });
        break;
    }
  };
  this.init = function() {
    _templateInit();
  };
  this.render = function() {
    _templateInsertData(arraySlides);
    _templateBuild();
    _prepareAnimation();
    _addEvents();
    _settingInterval();
  };
};