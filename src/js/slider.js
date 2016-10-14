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
        $firstItem = $slide.first();
    $('.js-bullets').eq(0).addClass('active');
    $firstItem.addClass('active').clone().appendTo('.js-content-holder').addClass('clone');
    $('.js-content-holder').css({width: $slide.width() * ($slide.length + 2)});

  };

  function _setInterval() {
    _interval = setInterval(function () {
      _slide(1)
    }, options.duration)
  };

  /*

      В текущем виде есть такие баги/ммоменты идиотизма:
      1) Первый и последний буллеты не переключаются при достижении клонов
      2) Странная задержка в областик клонов, точнее лишняя итерация
      3) Снова ифы, снова громоздко
      4) Я не знаю как обойтись без ифов и счета индекса :( - узнал, в процессе реализации.
        конкретнее - избавление от индекса и присвоение активному слайду класса, класс менять по некст()/прев()
        Буллеты считать по .index() -
        UPD: Все равно не знаю :(

        UPD 11.10: знаю примерное решение, подсказали

   */

  function _slide(direction) {
    if (direction === 1) {
      if ($('.active').index() === $('.js-content-holder li').length - 1) {
        $('.js-content-holder').css({"transform": "translateX(-" + 0 + "px) "}).removeClass('animated')
          .add($('.active')).removeClass('active');
        $('.js-content-holder li').eq(0).addClass('active');
        $('.js-bullets').eq(0).addClass('active');
      }
      else {
        $('.active').removeClass('active').next().addClass('active');
       _translate()
      }
    }
    else if (direction === -1) {
      if ($('.active').index() === 0) {
        $('.js-content-holder').css({"transform": "translateX(-"
        + ($('.js-content-holder li').last().index()) * options.slideWidth + "px) "})
          .removeClass('animated')
          .add($('.active')).removeClass('active');
        $('.js-content-holder li').last().addClass('active');
        $('.js-bullets').last().addClass('active');
      }
      else {
        $('.active').removeClass('active').prev().addClass('active');
        _translate()
      }
    }
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