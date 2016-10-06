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
    $('.js-content-holder').css({width: $('.js-content-holder li').width() * ($('.js-content-holder li').length + 2)});
  };

  function _setInterval() {
    var duration = 1000;
    _interval = setInterval(function() {
      _slide()
    }, duration)
  };

  function _slide() {
    $('.clone').remove();
    $('li').eq(0).clone().addClass('clone').appendTo($('.js-content-holder'));
    $('.js-content-holder').css("transform", "translateX(-" + _index * 500 + "px) ").addClass('animated');
    _index++;
    if (_index > $('.js-content-holder li').length) {
      $('li').eq(0).clone().addClass('clone').appendTo($('.js-content-holder'));
      _index = 0;
      $('.js-content-holder').css("transform", "translateX(-" + 0 + "px) ").removeClass('animated');
      console.log('AHTUNG');
    }

  }

  this.init = function() {
    _templateInit();
  };

  this.render = function() {
    _templateRender(data);
    _prepare();
    _setInterval();
  };
};