var Slider = function(arraySlides) {
  var index = 0,
    temp,
    totalSlides,
    _interval,
    slideWidth,
    position = 0 ,
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
    $('.js-nav span:first-child').addClass('on');
    totalSlides =  $slides.length;
    slideWidth = $('.js-content-holder img').width();
    $slides.first().clone().appendTo($holder);
    $slides.last().clone().prependTo($holder);
    position = -slideWidth;
    $holder.css({width: slideWidth * (totalSlides + 2),
      'transform':'translateX('+(position)+'px)'});
    
  };

  function _addEvents() {
    $next.on('click', (function() {
      _slide(-1);
    }));
    $prev.on('click', (function() {
      _slide(1);
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
      _slide(-1);
    }, duration);
  };
  //Attention! Много костылей и голвнокода
  function _checkEnd() {
    $holder.removeClass('animated');
    $('.on').removeClass('on');
    index = 0;
    $bullets.eq(index).addClass('on');
    console.log('ziga', position);
    position = -slideWidth;
    $holder.css({'transform':'translateX('+(position)+'px)'});
    console.log('Ahtung', position);
    console.log($holder.attr('class'));
  };
  function _slide(direction) {
    if(index === totalSlides || index === -1) {_checkEnd();}
    $('.on').removeClass('on');
    $holder.addClass('animated');
    position = position + direction * slideWidth; // -1 right, 1 left
    $holder.css({'transform': 'translateX(' + (position) + 'px)'});
    temp = index;
    switch (direction){
      case -1:
        index++;
        break;
      case 1:
        index--;
        break;
      default:
        console.log('AHTUNG!!!');
    }
    //пока счетчиком
    /*
      Почему не просто какой нибудь счетчик?
      Такой подход позволяет учесть перемещение в обе стороны,
      благодаря привязке position к самим слайдам. 
      И нет необходимости следить за понижением/повышением переменной :)
    */
   // index = parseInt($slides.eq(Math.abs(Math.round((position + slideWidth) / slideWidth)))
    //  .data('number'));
    console.log(index);
    console.log(position);
    if(index === totalSlides || index === 0) {
      console.log('lolololo');
      //position = position + direction * slideWidth;
      position = -slideWidth;
      console.log(position);
      //$holder.css({'transform': 'translateX(' + (position) + 'px)'});
      $bullets.eq(totalSlides - temp - 1).addClass('on');
    }
    else {
      $bullets.eq(index).addClass('on');
    }
  }
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