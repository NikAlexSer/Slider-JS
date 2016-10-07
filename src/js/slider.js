var Slider;
Slider = function (data, options) {
  var
      _template,
      _interval,
      _index = 0;


  // Инициализация при создании экземпляра класса
  _init();

  // Handlebars functions
  function _templateInit() {
    _template = Handlebars.compile($('#slider-template').html());
  };
  function _templateRender(arraySlides) {
    $('.js-slider').html(_template({slidesTemp: arraySlides}));
  };

  function _prepare() {
    var
        $lastItem =  $('li').last(),
        $firstItem = $('li').first();
    $('.js-content-holder').css({width: $('.js-content-holder li').width() * ($('.js-content-holder li').length + 2), marginLeft: -500});
    $firstItem.clone().addClass('clone').appendTo($('.js-content-holder'));
    $lastItem.clone().addClass('clone').prependTo($('.js-content-holder'));
    $('.js-bullets').eq(0).addClass('active');
  };

  function _setInterval() {
    _interval = setInterval(function () {
      _slide(1)
    }, options.duration)
  };

  function _changeBullet() {
    $('.js-bullets').removeClass('active').eq(_index).addClass('active');
  }

  function _translate(isAnimated) {
    if (isAnimated) {
      $('.js-content-holder').css("transform", "translateX(-" + _index * 500 + "px) ").addClass('animated');
      _changeBullet();
    }
    else {
      $('.js-content-holder').css({"transform": "translateX(-" + _index * 500 +  "px) "}).removeClass('animated');
      _changeBullet();
    }
  }
  /*
  В текущем виде есть такие баги:
  1) Первый и последний буллеты не переключаются при достижении клонов
  2) Странная задержка в областик клонов
  3) Снова ифы, снова копипаста, снова громоздко
  4) Перелистывание при движение влево
   */
  function _slide(direction) {
    _index += direction;
    if (_index === $('.js-content-holder li').length - 1) {
      _index = 0;
     _translate(false);
    }
    else if (_index === -1) {
      _index = $('.js-content-holder li').length - 2;
     _translate(false);
    }
    else {
      _translate(true);
    }
  };

  function _init() {
    _templateInit();
    $('.js-slider')
        .on('click', '.control-next', function () {
          _slide(1);
        })
        .on('click', '.control-prev', function () {
          _slide(-1);
        })
        .on('click', '.js-bullets', function () {
          _index = parseInt($(this).data('number')) + 1;
          _slide(-1);
        })
        .on('mouseenter', function () {
          clearInterval(_interval)
        })
        .on('mouseleave', function () {
          _setInterval()
        });

  };

  this.render = function () {
    _templateRender(data);
    _prepare();
    _setInterval();
  };
};