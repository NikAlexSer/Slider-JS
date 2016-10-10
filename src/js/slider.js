var Slider;
Slider = function (data, options) {
  var
      _template,
      _interval;


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
        $slide = $('.js-content-holder li'),
        $firstItem = $('.js-content-holder li').first(),
        $lastItem = $('.js-content-holder li').last();
    $('.js-bullets').eq(0).addClass('active');
    $('.js-content-holder li').eq(0).addClass('active');
    $firstItem.clone().appendTo('.js-content-holder').addClass('clone');
    $lastItem.clone().prependTo('.js-content-holder').addClass('clone');
    $('.js-content-holder').css({width: $slide.width() * ($slide.length + 2), marginLeft: -500});

  };

  function _setInterval() {
    _interval = setInterval(function () {
      _slide(1)
    }, options.duration)
  };

  /*

      В текущем виде есть такие баги/ммоменты идиотизма:
      1) Первый и последний буллеты не переключаются при достижении клонов
      2) Странная задержка в областик клонов
      3) Снова ифы, снова копипаста, снова громоздко
      4) Перелистывание при движение влево
      5) Ужасно криво работает переход в начало/конец
      6) Я не знаю как обойтись без ифов и счета индекса :( - узнал, в процессе реализации.
        конкретнее - избавление от индекса и присвоение активному слайду класса, класс менять по некст()/прев()
        Буллеты считать по .index() -
        UPD: Все равно не знаю :(

   */
  function _slide(direction) {
    console.log($('.active').index())
    if (direction === 1) {
      if ($('.active').index() === $('.js-content-holder li').length - 1) {
        $('.js-content-holder').css({"transform": "translateX(-" + 0 + "px) "}).removeClass('animated')
          .add($('.active')).removeClass('active');
        $('.js-content-holder li').eq(1).addClass('active');
        $('.js-bullets').eq(0).addClass('active');
      }
      else {
        $('.active').removeClass('active').next().addClass('active');
        $('.js-content-holder').css({"transform": "translateX(-" + (($('.active').index() - 1) * 500) + "px) "}).addClass('animated')
      }
    }
    else if (direction === -1) {
      $('.active').removeClass('active').prev().addClass('active');
      $('.js-content-holder').css({"transform": "translateX(-" + (($('.active').index() - 1) * 500)  + "px) "}).addClass('animated')
    }
    console.log($('.active').index())
  };

  function _init() {
    _templateInit();
    $('.js-slider')
        .on('click', '.control-next', function () {
          _slide(1); // 1 вправо
        })
        .on('click', '.control-prev', function () {
          _slide(-1); // -1 влево
        })
        .on('click', '.js-bullets', function () {

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