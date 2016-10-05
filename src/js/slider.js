var Slider = function(data) {
  var
      _template,
      _interval,
      _index = 0;

  // Handlebars functions
  function _templateInit() {
      _template = Handlebars.compile( $('#slider-template').html() );
  };
  function _templateRender(arraySlides) {
    $('.js-slider').html(_template({slidesTemp: arraySlides}));
  };

  function _prepare() {
    $('.js-content-holder').css({width: $('.js-content-holder img').width() * ($('.js-content-holder li').length + 2)});
  };

  function _setInterval() {
    var duration = 1000;
    _interval = setInterval(function() {
      _slide()
    }, duration)
  };

  function _slide() {
    $('.js-content-holder').css("transform", "translateX(-" + _index * 500 + "px) ").addClass('animated');
    _index++;
    $('li').eq(_index).clone().appendTo($('.js-content-holder'));
    //$('.animated').removeClass('animated')
  }

  this.init = function() {
    _templateInit();
  };

  this.render = function() {
    _templateRender(data);
    console.log('lol');
    _prepare();
    console.log('ziga');
    _setInterval();
  };
};